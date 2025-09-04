import { merge } from "./merge";

function runDemo() {
  console.log("🚀 Array Merge Project Demo\n");

  const testCases = [
    {
      name: "Basic merge",
      inputs: [
        [1, 3, 5],
        [6, 4, 2],
        [7, 8, 9],
      ],
    },
    {
      name: "Negative numbers and zero",
      inputs: [
        [-5, -1, 0],
        [2, -2, -4],
        [-3, 1, 3],
      ],
    },
    {
      name: "Duplicate values",
      inputs: [
        [1, 3, 5],
        [5, 3, 1],
        [2, 3, 4],
      ],
    },
    {
      name: "All empty arrays",
      inputs: [[], [], []],
    },
    {
      name: "Only one array with elements",
      inputs: [[1, 2, 3], [], []],
    },
    {
      name: "Single-element arrays",
      inputs: [[5], [3], [7]],
    },
    {
      name: "Mixed large numbers, zeros, negatives, duplicates",
      inputs: [
        [0, 0, 1, 100, 200, 300],
        [600, 500, 2, 1, -1],
        [0, 1, 2, 150, 250, 9999],
      ],
    },
  ];

  for (const { name, inputs } of testCases) {
    console.log(`Test Case: ${name}`);
    console.log(`  Input 1 (min→max): [${inputs[0].join(", ")}]`);
    console.log(`  Input 2 (max→min): [${inputs[1].join(", ")}]`);
    console.log(`  Input 3 (min→max): [${inputs[2].join(", ")}]`);

    const result = merge(inputs[0], inputs[1], inputs[2]);
    console.log(`  Output: [${result.join(", ")}]\n`);
  }

  console.log('✅ Demo completed! Run "npm test" to see unit tests.');
}

if (require.main === module) {
  runDemo();
}

export { merge };
