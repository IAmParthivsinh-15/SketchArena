import { Server } from "socket.io";

const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    path: "/socket.io/", // Explicit path
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    },
    connectionStateRecovery: {
      maxDisconnectionDuration: 2 * 60 * 1000,
    }
  });

  // Store room data
  const rooms = new Map();

  io.on("connection", (socket) => {
    console.log("⚡ New client connected:", socket.id);

    // User joins the room
    socket.on("join-room", async ({ roomId, user }) => {
      try {
        // Initialize room if it doesn't exist
        if (!rooms.has(roomId)) {
          rooms.set(roomId, {
            players: new Map(),
            gameState: {
              currentDrawer: null,
              currentWord: null,
              roundTime: 60,
              hintsLeft: 3,
              scores: {},
              roundNumber: 0,
              gameStarted: false,
            },
          });
        }

        const room = rooms.get(roomId);

        // Add player to room
        room.players.set(socket.id, {
          id: user._id,
          name: user.name,
          isHost: user.isHost,
          score: 0,
          socketId: socket.id
        });

        // Join socket room
        await socket.join(roomId);
        socket.data.roomId = roomId;
        socket.data.userId = user._id;

        // Broadcast updates
        io.to(roomId).emit("room-update", {
          players: Array.from(room.players.values()),
          gameState: room.gameState,
        });

        console.log(`${user.name} joined room ${roomId}`);
      } catch (error) {
        console.error("Join room error:", error);
        socket.emit("join-error", { 
          message: "Failed to join room",
          error: error.message 
        });
      }
    });


    // Handle drawing data
    socket.on("drawing-data", (data) => {
      const roomId = socket.data.roomId;
      if (roomId) {
        socket.to(roomId).emit("drawing-update", data);
      }
    });

    // Handle chat messages
    socket.on("send-message", ({ message }) => {
      const roomId = socket.data.roomId;
      if (roomId) {
        const player = rooms[roomId]?.players.find(
          (p) => p.socketId === socket.id
        );
        if (player) {
          io.to(roomId).emit("receive-message", {
            message,
            user: player.name,
            isCorrectGuess:
              message.toLowerCase() ===
              rooms[roomId]?.gameState.currentWord?.toLowerCase(),
          });

          // Handle correct guess
          if (
            message.toLowerCase() ===
            rooms[roomId]?.gameState.currentWord?.toLowerCase()
          ) {
            // Update score
            const playerIndex = rooms[roomId].players.findIndex(
              (p) => p.socketId === socket.id
            );
            if (playerIndex !== -1) {
              rooms[roomId].players[playerIndex].score += 10;
            }

            // Notify all players
            io.to(roomId).emit("correct-guess", {
              playerId: rooms[roomId].players[playerIndex].id,
              playerName: rooms[roomId].players[playerIndex].name,
              word: rooms[roomId].gameState.currentWord,
            });
          }
        }
      }
    });

    // Handle game start
    socket.on("start-game", () => {
      const roomId = socket.data.roomId;
      if (roomId && rooms[roomId]) {
        // Select first drawer (could be random or host)
        rooms[roomId].gameState.currentDrawer = rooms[roomId].players[0].id;
        rooms[roomId].gameState.hintsLeft = 3;

        io.to(roomId).emit("game-started", {
          drawer: rooms[roomId].players[0].name,
          roundTime: rooms[roomId].gameState.roundTime,
        });
      }
    });

    // Handle hint request
    socket.on("request-hint", () => {
      const roomId = socket.data.roomId;
      if (roomId && rooms[roomId]?.gameState.hintsLeft > 0) {
        rooms[roomId].gameState.hintsLeft -= 1;
        io.to(roomId).emit("hint-update", {
          hintsLeft: rooms[roomId].gameState.hintsLeft,
        });
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      const roomId = socket.data.roomId;
      if (roomId && rooms[roomId]) {
        // Remove player from room
        rooms[roomId].players = rooms[roomId].players.filter(
          (player) => player.socketId !== socket.id
        );

        // Notify remaining players
        if (rooms[roomId].players.length > 0) {
          io.to(roomId).emit("player-left", {
            playerId: socket.data.userId,
          });

          io.to(roomId).emit("room-update", {
            players: rooms[roomId].players,
            gameState: rooms[roomId].gameState,
          });
        } else {
          // Clean up empty room
          delete rooms[roomId];
        }
      }
      console.log("Client disconnected: " + socket.id);
    });
  });

  return io;
};

export default initSocket;
