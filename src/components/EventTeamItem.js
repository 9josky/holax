import React from "react";

// import socialWorker1 from "../img/home-event/social-worker1.jpg"
// import socialWorker2 from "../img/home-event/social-worker2.jpg"

function EventTeamItem({ image, name, post }) {
  return (
    <div className="item">
      <div className="e_team_img">
        <img
          style={{ height: "400px" }}
          // style={{ width: "100%", height: "100%" }}
          src={require(`../img/home-event/${image}`)}
          alt="Expert Glass and Aluminium Services in Lagos, Nigeria"
        />
        {/* <ul className="list-unstyled">
                    {
                        FooterData.socialIcon.map(item=>{
                            return(
                                <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                            )
                        })
                    }
                </ul> */}
      </div>
      <a href="/#">
        <h4>{name}</h4>
      </a>
      <p>{post}</p>
    </div>
  );
}

export default EventTeamItem;
