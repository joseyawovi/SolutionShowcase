import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Equipment routes
  app.get("/api/equipment", async (req, res) => {
    try {
      const { category } = req.query;
      
      if (category && typeof category === 'string') {
        const equipment = await storage.getEquipmentByCategory(category);
        res.json(equipment);
      } else {
        const equipment = await storage.getAllEquipment();
        res.json(equipment);
      }
    } catch (error) {
      console.error('Error fetching equipment:', error);
      res.status(500).json({ message: "Failed to fetch equipment" });
    }
  });

  app.get("/api/equipment/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const equipment = await storage.getEquipmentById(id);
      
      if (!equipment) {
        return res.status(404).json({ message: "Equipment not found" });
      }
      
      res.json(equipment);
    } catch (error) {
      console.error('Error fetching equipment by ID:', error);
      res.status(500).json({ message: "Failed to fetch equipment" });
    }
  });

  // Parts routes
  app.get("/api/parts", async (req, res) => {
    try {
      const { category } = req.query;
      
      if (category && typeof category === 'string') {
        const parts = await storage.getPartsByCategory(category);
        res.json(parts);
      } else {
        const parts = await storage.getAllParts();
        res.json(parts);
      }
    } catch (error) {
      console.error('Error fetching parts:', error);
      res.status(500).json({ message: "Failed to fetch parts" });
    }
  });

  app.get("/api/parts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const part = await storage.getPartById(id);
      
      if (!part) {
        return res.status(404).json({ message: "Part not found" });
      }
      
      res.json(part);
    } catch (error) {
      console.error('Error fetching part by ID:', error);
      res.status(500).json({ message: "Failed to fetch part" });
    }
  });

  // Quote routes
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuote(validatedData);
      
      res.status(201).json({ 
        message: "Quote request submitted successfully", 
        quote 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid data provided", 
          errors: error.errors 
        });
      }
      
      console.error('Error creating quote:', error);
      res.status(500).json({ message: "Failed to submit quote request" });
    }
  });

  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      res.status(500).json({ message: "Failed to fetch quotes" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
