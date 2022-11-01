import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Thank You!</h1>
        <ul>
          <li>Prime Academy</li>
          <li>Chris Black</li>
          <li>Monday pod groupmates</li>
        </ul>
        <h3>Technologies Used</h3>
        <ul>
          <li>React JS</li>
          <li>Node/Express</li>
          <li>Postgresql</li>
        </ul>
        <h3>Challenges</h3>
        <ul>
          <li>SQL relational databases</li>
          <li>File Management/Organization</li>
        </ul>

        <h3>Next Steps</h3>
        <ul>
          <li>Websocket Messaging</li>
          <li>Image Uploads with AWS s3</li>
          <li>Heroku Deployment</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
