class Dialogue {
  private buffer: string[] = [];

  constuctor() {
  }

  /**
  * return true iff any text if left in the buffer
  */
  public putText(setText: (text: string)=>void): boolean {
    if (this.buffer.length === 0) 
      throw new Error("No more text to get from buffer");

    let text = this.buffer.pop();
    if (text === undefined) {
      throw new Error("undefined text");
    }

    setText(text)

    return this.buffer.length !== 0;
  }
}

export default Dialogue;
