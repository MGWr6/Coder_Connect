const React = require("react");
import "./profilePage.css"


function ProfilePage() {
    return (
       <main>
  
  <div classNameName="container text-center">    
  <div className="row">
    <div className="col-sm-3 well">
      <div className="well">
        <p className="profile">My Profile</p>
        <h2 className="profile">Name</h2>
        <h3 className="profile">Current Occupation</h3>
        <h3 className="profile">Education/Skill Level</h3>
      </div>
      <div className="well">
        <p><a href="#">Discover Other Code!</a></p>
        <p>
          <span className="label label-default">GitHub</span>
          <span className="label label-primary">Discord</span>
        </p>
      </div>
      
      <p><a href="github.com">Mile Stone 1</a></p>
      <p><a href="github.com">React-A-Mole</a></p>
      <p><a href="github.com">Portfolio</a></p>
    </div>
    <div className="col-sm-7">
    
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default text-left">
            <div className="panel-body">
              <h2>Hello User!</h2>
              <p>What would you like to work on?</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
           <p>Project 1:</p>
           <p><a href="https://digitalskills.instructure.com/courses/5375">MySQL : </a></p>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>To do: Updating the Routes</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
           <p>Project 2:</p>
           <p><a href="https://digitalskills.instructure.com/courses/4915">React-Music-Library : </a></p>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>description</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
           <p>Project 3:</p>
           <p><a href="https://digitalskills.instructure.com/courses/5792">MileStone 2 : </a></p>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>description</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
           <p>Project 4:</p>
           <p><a href="https://digitalskills.instructure.com/courses/3811">CSS : </a></p>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>description</p>
          </div>
        </div>
      </div>     
    </div>
    <div className="col-sm-2 well">
      <div className="well">
        <p>Study Lounge:</p>
        <p><a href="https://learnjs.slack.com/ssb/redirect">Frontend</a></p>
        <p></p>
      </div>      
      <div className="well">
<p><a href="https://discord.com/invite/yvtRAAaP">CodeSupport community</a></p>
      </div>
      <div className="well">
        <p><a href="https://discord.com/invite/python">Python</a></p>
      </div>
    </div>
  </div>
</div>
       </main> 
    );
}

export default ProfilePage;