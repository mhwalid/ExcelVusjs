export default class Person {
    FirstName = null;
    FirstResponseDate = null;
    EndDate = null;
    State = null;
    Answer = '';
 
    constructor(fdate,ldate,state,fname ,answer) 
    {
      this.FirstResponseDate = fdate;
      this.EndDate = ldate;
      this.State = state;
      this.FirstName = fname;
      this.Answer = answer;
    }

    getAnswer()
    {
      return this.Answer;
    }        
}