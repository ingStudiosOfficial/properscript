try {
    throw new Error("terribly sorry");
} catch (error) {
    warn("A blunder occurred:", error.message);
}