function Main() {
  return (
      <div className="row">
          <div className="col-12">
              <div className="text">
                  <ul className="row button-list">
                      <li className="col-6"><a href="/create" type=" button" className="btn btn-primary">Create a note</a></li>
                      <li className="col-6"><a href="/note" type=" button" className="btn btn-primary">View the note</a></li>
                  </ul>
              </div>
              
              <div className="text">
                  <p><b>QuickNotes </b> – a platform for quick note sharing. Create a note, share the link, and your interlocutor will be able to view it.
                  After viewing, the note will be automatically deleted (or 15 minutes after creation)</p>
                  <p>How do I make a note?</p>
                  <ul>
                      <li>Follow the link</li>
                      <li>Paste the text and click <b>Create</b></li>
                      <li>Send the generated address to a friend!</li>
                  </ul>
                  <p>How do I read the note? Go to the sent URL, or enter the address with your hands here.</p>
              </div>
          </div>
      </div>
  );
}

export default Main;