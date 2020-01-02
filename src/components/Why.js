import React from "react";

const Why = () => {
  return (
    <>
      <h3>Pros</h3>
      <dl>
        <dt>Fast: Virtual DOM</dt>
        <dd>The entire virtual DOM gets updated.</dd>
        <dd>
          The virtual DOM gets compared to what it looked ddke before you
          updated it. React figures out which objects have changed. The changed
          objects, and the changed objects only, get updated on the real DOM.
        </dd>
        <dd>Changes on the real DOM cause the screen to change.</dd>
        <dt>SEO friendly</dt>
        <dt>Reusable components</dt>
        <dt>Easy data flow</dt>
        <dt>No compiling -> Webpack</dt>
      </dl>
      <h3>Cons</h3>
      <dl>
        <dt>No predefined structure</dt>
        <dt>React internals -> weird error messages</dt>
        <dt>
          <i>Think</i> React
        </dt>
        <dt>Use of inline styling in JSX in conjunction with classNames</dt>
        <dt>Complex state management</dt>
      </dl>
    </>
  );
};

export default Why;
