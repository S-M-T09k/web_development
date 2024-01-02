class YouTuber {

  constructor (name, typeOfContent, subscribed, )
  {
    this.name          = name;
    this.typeOfContent = typeOfContent;
    this.subscribed    = subscribed;
  };

  subscribe ()
  {
    if (this.subscribed) {
      console.log(`you are already subscribed to ${this.name}`);
    }
    else {
      console.log(`you subscribed to ${this.name}`);
    };

    this.subscribed = true
  };

  unSubscribe ()
  {
    if (this.subscribed) {
      console.log(`you unsubscribed to ${this.name}`);
    }
    else {
      console.log(`you are already unsubscribed to ${this.name}`);
    };

    this.subscribed = false;
  };



};



export {YouTuber};