import { Socket } from "socket.io-client";

// Define user object type
export interface User {
  _id: string;
  name: string;
  isHost?: boolean;
  score?: number;
  avatar?: string; // Optional avatar property
}

// Define game state type
export interface GameState {
  currentDrawer: string | null;
  currentWord: string | null;
  roundTime: number;
  hintsLeft: number;
  scores: Record<string, number>;
  roundNumber?: number;
  maxRounds?: number;
  gameStarted?: boolean;
  gameEnded?: boolean;
}

// Define drawing data type (adjust according to your drawing implementation)
export interface DrawingData {
  type: string;
  color: string;
  points: { x: number; y: number }[];
  width?: number;
}

export interface ServerToClientEvents {
  // Room events
  "player-joined": (player: User) => void;
  "player-left": (data: { playerId: string }) => void;
  "room-update": (data: { players: User[]; gameState: GameState }) => void;
  
  // Game events
  "game-started": (data: { drawer: string; roundTime: number }) => void;
  "round-started": (data: { drawer: string; word?: string; roundTime: number }) => void;
  "drawing-update": (data: DrawingData) => void;
  "correct-guess": (data: { playerId: string; playerName: string; word: string }) => void;
  "hint-update": (data: { hintsLeft: number; hint?: string }) => void;
  "game-ended": (data: { scores: Record<string, number>; winner: string }) => void;
  
  // Chat events
  "receive-message": (data: { user: User; message: string; isCorrectGuess?: boolean }) => void;
  "system-message": (message: string) => void;
}

export interface ClientToServerEvents {
  // Room events
  "join-room": (data: { roomId: string; user: User }) => void;
  "leave-room": (data: { roomId: string; userId: string }) => void;
  
  // Game events
  "start-game": (roomId: string) => void;
  "start-drawing": (data: { roomId: string; drawingData: DrawingData }) => void;
  "request-hint": (roomId: string) => void;
  "submit-guess": (data: { roomId: string; message: string; userId: string }) => void;
  
  // Chat events
  "send-message": (data: { roomId: string; user: User; message: string }) => void;
}

export type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;