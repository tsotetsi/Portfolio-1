import React from "react";

const collapsible = () => {
  return (
    <div>
      <ul class="collapsible popout">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>First
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">place</i>Second
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">whatshot</i>Third
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default collapsible;
