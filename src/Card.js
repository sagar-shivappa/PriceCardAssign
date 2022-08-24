import "./Price.css";

function Card(props) {
  console.log(props);
  return (
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">
          {props.res.title}
        </h5>
        <h6 class="card-price text-center">
          {props.res.price}
          <span class="period">Per Month</span>
        </h6>
        <hr />
        <ul class="fa-ul">
          <li>
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.userType}
          </li>
          <li>
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.storage}
          </li>
          <li>
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.project}
          </li>
          <li>
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.access}
          </li>
          <li class="text-muted">
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.support}
          </li>
          <li class="text-muted">
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.plan}
          </li>
          <li class="text-muted">
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.domain}
          </li>
          <li class="text-muted">
            <span class="fa-li">
              <i class="fa fa-check"></i>
            </span>
            {props.res.reports}
          </li>
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
