class Dialogue {
  public buffer: string[] = [];
  constuctor() {
  }

  /**
  * return true iff any text if left in the buffer
  */
  public getText(setText: (text: string)=>void): boolean {
    if (this.buffer.length === 0) 
      throw new Error("No more text to get from buffer");

    let text = this.buffer.shift();
    if (text === undefined) {
      throw new Error("undefined text");
    }

    setText(text)

    console.log("this.buffer", this.buffer);
    return this.buffer.length !== 0;
  }

  public addText(text: string) {
    this.buffer.push(text);
  }

  public hasText(): boolean {
    return this.buffer.length !== 0;
  }
}

export default Dialogue;
