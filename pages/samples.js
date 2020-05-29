import { query as q, Expr } from "faunadb";

export const samples = {
  Any: true,
  "All the Any properties (for info)": {
    input: true,
    schema: {
      type: "any",
      description:
        "This is all the currently available properties for this type"
    }
  },
  "A boolean: true": {
    input: true,
    schema: {
      type: "any",
      description: "It should always pass, no matter what!"
    }
  },
  "A number: 100": {
    input: 100,
    schema: {
      type: "any",
      description: "It should always pass, no matter what!"
    }
  },
  "A string: 'John'": {
    input: "John",
    schema: {
      type: "any",
      description: "It should always pass, no matter what!"
    }
  },
  Array: true,
  "All the Array properties (for info)": {
    input: ["ok", "great"],
    schema: {
      type: "array",
      convert: true,
      empty: true,
      min: 1,
      max: 4,
      count: 2,
      includes: ["ok"],
      unique: true,
      enum: ["ok", "great", "amazing"],
      items: "string",
      distinct: true,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "An array of strings": {
    input: ["user", "admin"],
    schema: {
      type: "array",
      items: "string",
      description: "Try setting 'items:number'"
    }
  },
  "An array of numbers": {
    input: [2, 4],
    schema: {
      type: "array",
      items: "number",
      description: "Try setting 'items:string'"
    }
  },
  "An array of user objects": {
    input: [
      { id: 1, name: "John", status: true },
      { id: 2, name: "Jane", status: true },
      { id: 3, name: "Bill", status: false }
    ],
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: "number",
          name: "string",
          status: "boolean"
        }
      },
      description: "Try changing the schema!"
    }
  },
  // "Array contains only enum": {
  //   input: ["user", "admin"],
  //   schema: {
  //     type: "string",
  //     enum: ["user", "admin", "team"],
  //     description: "Try changing the schema!"
  //   }
  // },
  "An unique array of numbers": {
    input: [2, 4, 3, 8, 4],
    schema: {
      type: "array",
      unique: true,
      items: "number",
      description: "Try adding distinct:true before unique:true."
    }
  },
  Boolean: true,
  "All the Boolean properties (for info)": {
    input: true,
    schema: {
      type: "boolean",
      convert: true,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "A boolean: true": {
    input: true,
    schema: {
      type: "boolean",
      description: "Try changing the schema!"
    }
  },
  "A number: 1": {
    input: 1,
    schema: {
      type: "boolean",
      convert: true,
      description: "Try changing the schema!"
    }
  },
  "A string: 'true'": {
    input: "true",
    schema: {
      type: "boolean",
      convert: true,
      description: "Try setting 'input:off'"
    }
  },
  Bytes: true,
  "All the Bytes properties (for info)": {
    input: true,
    schema: {
      type: "bytes",
      convert: true,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "Fauna bytes: q.Bytes('AQIDBA==')": {
    input: q.Bytes("AQIDBA=="),
    schema: {
      type: "bytes",
      description: "Try changing the schema!"
    }
  },
  "An array of unsigned-integers: new Uint8Array([1, 2, 3, 4])": {
    input: new Uint8Array([1, 2, 3, 4]),
    schema: {
      type: "bytes",
      description: "Try changing the schema!"
    }
  },

  Date: true,
  "All the Date properties (for info)": {
    input: true,
    schema: {
      type: "date",
      convert: true,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "A fauna date: q.Date('2020-05-28')": {
    input: q.Date("2020-05-28"),
    schema: {
      type: "date",
      description: "Try changing the schema!"
    }
  },
  "A string date: '2020-05-28'": {
    input: "2020-05-28",
    schema: {
      type: "date",
      convert: true,
      description: "Try changing the schema!"
    }
  },
  String: true,
  "All the String properties (for info)": {
    input: "John",
    schema: {
      type: "string",
      convert: true,
      empty: true,
      min: 0,
      max: 10,
      length: 5,
      pattern: "$\\w",
      contains: "Jo",
      enum: ["John", "Maggy"],
      numeric: true,
      alpha: true,
      alphanum: true,
      alphadash: true,
      startsWith: "Jo",
      endsWith: "hn",
      trim: true,
      trimStart: true,
      trimEnd: true,
      padStart: true,
      padEnd: true,
      lowercase: true,
      uppercase: true,
      capitalize: true,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "A string from enum list": {
    input: "male",
    schema: {
      type: "string",
      enum: ["male", "female"],
      description: "Try changing the schema!"
    }
  },
  "A short text": {
    input: "That's a cool text right there!",
    schema: {
      type: "string",
      contains: "cool",
      min: 10,
      max: 23,
      description: "Should fail because max isn't enough. Try setting 'max:34'."
    }
  },
  "From a number": {
    input: 123,
    schema: {
      type: "string",
      convert: true,
      description: "Try changing the schema!"
    }
  },
  Number: true,
  "All the Number properties (for info)": {
    input: 125,
    schema: {
      type: "number",
      convert: true,
      min: 2,
      max: 3,
      equal: 123,
      nonEqual: 0,
      integer: true,
      double: false,
      positive: true,
      negative: false,
      trunc: false,
      description:
        "This is all the currently available properties for this type"
    }
  },
  "A number: 123": {
    input: 123,
    schema: {
      type: "number",
      description: "Try changing the schema!"
    }
  },
  "A float number: 5.65": {
    input: 5.65,
    schema: {
      type: "number",
      description: "Try changing the schema!"
    }
  },
  "A string number: '100'": {
    input: "100",
    schema: {
      type: "number",
      convert: true,
      description: "Try changing the schema!"
    }
  },
  Object: true,
  "All the Object properties (for info)": {
    input: {
      hey: "top"
    },
    schema: {
      type: "object",
      allowAdditionals: false,
      properties: {
        hey: "string"
      },
      description:
        "This is all the currently available properties for this type"
    }
  },
  "An address validation": {
    input: {
      zip: 99400,
      city: "Enontekio",
      country: "Finland"
    },
    schema: {
      type: "object",
      properties: {
        zip: "number",
        city: "string",
        country: {
          type: "string",
          enum: ["France", "Norway", "Finland", "Italy", "Germany"]
        }
      },
      description: "Try changing the schema!"
    }
  },
  "An address validation (strict)": {
    input: {
      street: "211 Hetentie",
      zip: 99400,
      city: "Enontekio",
      country: "Finland"
    },
    schema: {
      type: "object",
      allowAdditionals: false,
      properties: {
        zip: "number",
        city: "string",
        country: {
          type: "string",
          enum: ["France", "Norway", "Finland", "Italy", "Germany"]
        }
      },
      description: "Try changing the schema!"
    }
  }

  // number: {
  //   input: 32,
  //   schema: {
  //     type: "number",
  //     min: 10,
  //     max: 24
  //   }
  // },
  // object: {
  //   input: {
  //     firstName: "Joe",
  //     lastName: "Dalton",
  //     age: 28,
  //     address: {
  //       street: "Main street avenue",
  //       city: "Nowhere"
  //     }
  //   },
  //   schema: {
  //     type: "object",
  //     properties: {
  //       firstName: "string",
  //       lastName: "string",
  //       age: "number|integer",
  //       address: {
  //         type: "object",
  //         properties: {
  //           street: "string",
  //           city: "string|uppercase"
  //         }
  //       }
  //     }
  //   }
  // }
};
