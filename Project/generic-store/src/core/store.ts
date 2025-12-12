import type { BaseItem } from "../interfaces/baseItem.js";

export class Store<T extends BaseItem> {
    private items: T[] = [];

    addItem(item: Omit<T, "id">): T {
        const newId = Date.now();
        const newItem = { ...item, id: newId } as T;
        
        this.items.push(newItem);
        console.log(`Item added with ID: ${newId}`);
        return newItem;
    }

    updateItem(id: number, fields: Partial<T>): void {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            console.error(`Item with ID: ${id} not found.`);
            return;
        }
        this.items[index] = { ...this.items[index], ...fields } as T;
        console.log(`[Store] Updated item ID ${id}.`);
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
    
    getAll(): T[] {
        return this.items;
    }
}