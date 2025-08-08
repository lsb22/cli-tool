export default {
  type: "object", // to indicate that we're expecting an object
  properties: {
    port: {
      type: "number",
    },
  },
  required: ["port"], // to specify that port is required with correct type
};
