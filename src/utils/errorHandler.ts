export const handleResolverError = (error: unknown, message: string): never => {
  if (error instanceof Error) {
    throw new Error(`${message} Error: ${error.message}`);
  } else {
    throw new Error(`${message} An unknown error occurred.`);
  }
};
