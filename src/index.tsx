import React from 'react';
import ReactDOM from 'react-dom';
import { AiFillBug, AiFillGithub } from 'react-icons/ai';
import Example1 from './examples/Example1';
function Main() {
  return (
    <main className="p-5">
      <div className="container mx-auto p-5">
        <h1 className="text-4xl my-3">React Hook Collapse</h1>
        <code className="bg-black bg-opacity-20 p-3 inline-block my-3 text-sm text-opacity-80 text-black">
          npm install react-hook-collapse
        </code>
        <div className="flex space-x-3">
          <a
            className="text-sienna inline-flex items-center border border-black rounded-md p-2"
            target="_blank"
            href="https://github.com/gustavorino/react-hook-collapse"
          >
            <AiFillGithub className="mr-2 text-black" />
            Github
          </a>
          <a
            className="text-sienna inline-flex items-center border border-black rounded-md p-2"
            target="_blank"
            href="https://github.com/gustavorino/react-hook-collapse/issues/new"
          >
            <AiFillBug className="mr-2 text-black" />
            Issues
          </a>
        </div>
        <h2 className="text-3xl text-yellow-700 mt-5">Example #1</h2>
        <Example1></Example1>
      </div>
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));
