import { create } from "zustand";
import type { User, GameState, DrawingData } from "../sockets/socketTypes";

interface RoomSettings {
  isPrivate: boolean;
  maxPlayers: number;
  roundTime: number;
  maxRounds: number;
  wordCount: number;
  hints: number;
}

interface Message {
  user: User;
  text: string;
  isCorrect?: boolean;
  timestamp?: number;
}

interface RoomStore {
  // Room information
  roomId: string;
  setRoomId: (id: string) => void;

  roomSettings: RoomSettings | null;
  setRoomSettings: (settings: RoomSettings) => void;

  // User information
  currentUser: User | null;
  setCurrentUser: (user: User) => void;

  // Game state
  gameState: GameState;
  setGameState: (state: GameState) => void;
  updateGameState: (partialState: Partial<GameState>) => void;

  // Players in room
  players: User[];
  setPlayers: (players: User[]) => void;
  addPlayer: (player: User) => void;
  removePlayer: (playerId: string) => void;

  // Drawing
  currentDrawing: DrawingData[];
  setCurrentDrawing: (drawing: DrawingData[]) => void;
  addDrawingData: (data: DrawingData) => void;
  clearDrawing: () => void;

  // Chat
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;

  // Invite
  inviteLink: string;
  setInviteLink: (link: string) => void;

  currentRoomId: string;
  setCurrentRoomId: (id: string) => void;

  user: User | null;
  setUser: (user: User) => void;

  // Reset
  resetRoom: () => void;
}

const initialState = {
  roomId: "",
  roomSettings: null,
  currentUser: null,
  gameState: {
    currentDrawer: null,
    currentWord: null,
    roundTime: 60,
    hintsLeft: 3,
    scores: {},
    roundNumber: 0,
    maxRounds: 5,
    gameStarted: false,
    gameEnded: false,
  },
  players: [],
  currentDrawing: [],
  messages: [],
  inviteLink: "",
};

const useRoomStore = create<RoomStore>((set) => ({
  ...initialState,

  setRoomId: (id) => set({ roomId: id }),

  setRoomSettings: (settings) => set({ roomSettings: settings }),

  setCurrentUser: (user) => set({ currentUser: user }),

  setGameState: (state) => set({ gameState: state }),
  updateGameState: (partialState) =>
    set((state) => ({ gameState: { ...state.gameState, ...partialState } })),

  setPlayers: (players) => set({ players }),
  addPlayer: (player) =>
    set((state) => ({ players: [...state.players, player] })),
  removePlayer: (playerId) =>
    set((state) => ({
      players: state.players.filter((p) => p._id !== playerId),
    })),

  setCurrentDrawing: (drawing) => set({ currentDrawing: drawing }),
  addDrawingData: (data) =>
    set((state) => ({ currentDrawing: [...state.currentDrawing, data] })),
  clearDrawing: () => set({ currentDrawing: [] }),

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, { ...message, timestamp: Date.now() }],
    })),
  clearMessages: () => set({ messages: [] }),

  setInviteLink: (link) => set({ inviteLink: link }),

  currentRoomId: "",
  setCurrentRoomId: (id) => set({ currentRoomId: id }),

  user: null,
  setUser: (user) => set({ user }),

  resetRoom: () => set(initialState),
}));

export default useRoomStore;
