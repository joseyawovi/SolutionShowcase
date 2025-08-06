import { 
  type Equipment, 
  type InsertEquipment,
  type Part, 
  type InsertPart,
  type Quote, 
  type InsertQuote,
  type User, 
  type InsertUser 
} from "@shared/schema";
import { randomUUID } from "crypto";
import { EQUIPMENT_DATA, PARTS_DATA } from "../client/src/lib/constants";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Equipment methods
  getAllEquipment(): Promise<Equipment[]>;
  getEquipmentById(id: string): Promise<Equipment | undefined>;
  getEquipmentByCategory(category: string): Promise<Equipment[]>;
  createEquipment(equipment: InsertEquipment): Promise<Equipment>;
  
  // Parts methods
  getAllParts(): Promise<Part[]>;
  getPartById(id: string): Promise<Part | undefined>;
  getPartsByCategory(category: string): Promise<Part[]>;
  createPart(part: InsertPart): Promise<Part>;
  
  // Quote methods
  createQuote(quote: InsertQuote): Promise<Quote>;
  getAllQuotes(): Promise<Quote[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private equipment: Map<string, Equipment>;
  private parts: Map<string, Part>;
  private quotes: Map<string, Quote>;

  constructor() {
    this.users = new Map();
    this.equipment = new Map();
    this.parts = new Map();
    this.quotes = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Initialize equipment data
    EQUIPMENT_DATA.forEach(eq => {
      this.equipment.set(eq.id, {
        ...eq,
        createdAt: new Date()
      });
    });

    // Initialize parts data
    PARTS_DATA.forEach(part => {
      this.parts.set(part.id, {
        ...part,
        createdAt: new Date()
      });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Equipment methods
  async getAllEquipment(): Promise<Equipment[]> {
    return Array.from(this.equipment.values());
  }

  async getEquipmentById(id: string): Promise<Equipment | undefined> {
    return this.equipment.get(id);
  }

  async getEquipmentByCategory(category: string): Promise<Equipment[]> {
    return Array.from(this.equipment.values()).filter(eq => eq.category === category);
  }

  async createEquipment(insertEquipment: InsertEquipment): Promise<Equipment> {
    const id = randomUUID();
    const equipment: Equipment = { 
      ...insertEquipment, 
      id,
      createdAt: new Date()
    };
    this.equipment.set(id, equipment);
    return equipment;
  }

  // Parts methods
  async getAllParts(): Promise<Part[]> {
    return Array.from(this.parts.values());
  }

  async getPartById(id: string): Promise<Part | undefined> {
    return this.parts.get(id);
  }

  async getPartsByCategory(category: string): Promise<Part[]> {
    return Array.from(this.parts.values()).filter(part => part.category === category);
  }

  async createPart(insertPart: InsertPart): Promise<Part> {
    const id = randomUUID();
    const part: Part = { 
      ...insertPart, 
      id,
      createdAt: new Date()
    };
    this.parts.set(id, part);
    return part;
  }

  // Quote methods
  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const quote: Quote = { 
      ...insertQuote, 
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getAllQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values());
  }
}

export const storage = new MemStorage();
