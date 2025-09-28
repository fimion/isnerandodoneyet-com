

import type { Update } from "../types";

  // src/services/updateService.ts
  export class JsonUpdateRepository implements UpdateRepository {
    private updates: Update[] | null = null

    private async loadUpdates(): Promise<Update[]> {
      if (this.updates === null) {
        try {
          // Adjust path to your JSON file location
          const response = await fetch('/data/updates.json')
          if (!response.ok) {
            throw new Error(`Failed to load updates: ${response.statusText}`)
          }
          this.updates = await response.json()
        } catch (error) {
          console.error('Error loading updates:', error)
          throw new Error('Failed to load updates data')
        }
      }
      return this.updates || []
    }

    async getAll(): Promise<Update[]> {
      return await this.loadUpdates()
    }

    async getById(id: string): Promise<Update | null> {
      const updates = await this.loadUpdates()
      return updates.find(update => update.id === id) || null
    }

    async getByType(type: any): Promise<Update[]> {
      const updates = await this.loadUpdates()
      return updates.filter(update => update.type === type)
    }

    async search(query: string): Promise<Update[]> {
      const updates = await this.loadUpdates()
      const lowercaseQuery = query.toLowerCase()
      return updates.filter(update =>
        Object.values(update)
          .filter(value => typeof value === 'string')
          .some(value => value.toLowerCase().includes(lowercaseQuery))
      )
    }
  }



// src/services/updateService.ts
export interface UpdateRepository {
    getAll(): Promise<Update[]>
    getById(id: string): Promise<Update | null>
    getByType(type: any): Promise<Update[]>
    search(query: string): Promise<Update[]>
  }
