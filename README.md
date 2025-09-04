# Array Merge Project

A TypeScript project that implements a `merge` function to merge three integer arrays into a single sorted array in ascending order.

## Requirements

The project implements the `merge` function with this interface:

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

Given:

- `collection_1` & `collection_3`: Already sorted ascending (min → max)
- `collection_2`: Already sorted descending (max → min)
- Returns: Merged array sorted ascending

**Note**: No built-in sort functions are used.

## Quick Start

### Installation

**1. Clone the project directory**

```bash
git clone <repository-url>
```

**2. Install dependencies:**

```bash
npm install
```

### Run example code

```bash
npm run dev
```

### Run unit tests

```bash
npm test
```
