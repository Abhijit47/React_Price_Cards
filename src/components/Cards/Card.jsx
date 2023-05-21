import React from 'react';
import './Card.css';
const Card = (props) => {

  const { id, header, price, user, storage, public_Project, community_access, private_Project, support, subdomain, status_Report } = props.info;

  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body ">
            <h5 className="card-title text-muted text-uppercase text-center">
              {header}
            </h5>
            <h6 className="card-price text-center">
              {price}
              <span className=" fs-6"> /month</span>
            </h6>
            <hr />
            <ul className="fa-ul">

              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {user}
              </li>


              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {storage}
              </li>


              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {public_Project}
              </li>


              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {community_access}
              </li>

              {id === 1 ?
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {private_Project}
                </li>
                :
                <li className="">
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {private_Project}
                </li>}


              {/* <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {private_Project}
              </li> */}


              {id === 1 ?
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {support}
                </li>
                : <li className="">
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {support}
                </li>}

              {/* <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {support}
              </li> */}

              {id === 1 ?
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {subdomain}
                </li>
                :
                id === 2 ?
                  <li className="">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {subdomain}
                  </li>
                  :
                  <li className="">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span><b>Unlimited </b>
                    {subdomain}
                  </li>}

              {/* <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {subdomain}
              </li> */}

              {id === 1 || id === 2 ?
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {status_Report}
                </li>
                : <li className="">
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {status_Report}
                </li>}

              {/* <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {status_Report}
              </li> */}
            </ul>

            <div className="d-grid ">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;