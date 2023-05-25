import React, { useState } from "react";
import "./Dashboard.css";
const { Dialog } = require('primereact/dialog');
const { Tooltip } = require('primereact/tooltip');
const { ProgressBar } = require('primereact/progressbar');
const { Image } = require('primereact/image')



function Dashboard() {
    const [showRewardDialog, setShowRewardDialog] = useState([false, false, false]);

    //user's current points
    const [userPoints, setUserPoints] = useState(1947);

    //total points needed for each milestone
    const [milestonePoints, setMilestonePoints] = useState(2000);

    //leaderboard table
    

    function showReward(number){
        console.log("heelloooooooooooooooo"+number);
        let tempShowRewardDialog = [false, false, false];
        tempShowRewardDialog[number] = true;
        setShowRewardDialog(tempShowRewardDialog);
    }

    function hideRewardDialog(){
        console.log("byeeeeeeee")
        let tempShowRewardDialog = [false, false, false]
        setShowRewardDialog(tempShowRewardDialog);
    }
  return (
    <div>
      <body id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper"> 

    {/* <!-- Sidebar --> */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"> 

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3"> Paradigmer-Client </div>
        </a>


        {/* <!-- Divider --> */}
        {/* <hr className="sidebar-divider my-0"/> */}

        {/* <!-- Nav Item - Dashboard --> */}
        {/* <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li> */}

        {/* <!-- Divider -->
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        {/* <div className="sidebar-heading">
            Interface
        </div> */}

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        {/* <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div>
        </li> */}

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        {/* <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                    <a className="collapse-item" href="utilities-other.html">Other</a>
                </div>
            </div>
        </li> */}

        {/* <!-- Divider --> */}
        {/* <hr className="sidebar-divider"/> */}

        {/* <!-- Heading --> */}
        {/* <div className="sidebar-heading">
            Addons
        </div> */}

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        {/* <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                </div>
            </div>
        </li> */}

        {/* <!-- Nav Item - Charts --> */}
        {/* <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li> */}

        {/* <!-- Nav Item - Tables --> */}
        {/* <li className="nav-item">
            <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
        </li>
        */}
        {/* <!-- Divider --> */}
        {/* <hr className="sidebar-divider d-none d-md-block"/> */}

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        {/* <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div> */}

        {/* <!-- Sidebar Message --> */}
            {/* <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div> */}

        </ul>  
        {/* <!-- End of Sidebar --> */}


        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                {/* <form
                 className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form> */}

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a> 
                        {/* <!-- Dropdown - Messages --> */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                            {/* <!-- Counter - Alerts --> */}
                            <span className="badge badge-danger badge-counter">3+</span>
                        </a>
                        {/* <!-- Dropdown - Alerts --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw"></i>
                            {/* <!-- Counter - Messages --> */}
                            <span className="badge badge-danger badge-counter">7</span>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="..."/>
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img className="img-profile rounded-circle"
                                src="img/undraw_profile.svg"/>
                            <span className="badge badge- badge-counter"> 
                            <img width="5px" className="img-profile rounded-circle"
                                src="img/Badge1.svg"/></span>
                        </a>
                        {/* <!-- Dropdown - User Information --> */}
                        <div style={{width:'300px'}} className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            
                            <a style={{alignItems: 'center'}} className="dropdown-item" href="#">
                                {/* <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> */}
                                <img style={{marginLeft:65}} className="img-profile rounded-circle"
                                src="img/Badge1.svg"/>
                            </a>
                            <a className="dropdown-item" href="#">
                                <span className="text-xs text-info text-uppercase mb-1" style={{fontSize: 20, marginLeft:30}}>Douglas McGee</span>
                                {userPoints>(0.5*milestonePoints) && 
                                   <span className="text-xs font-weight-bold text-success text-uppercase mb-1" style={{fontSize: 12, marginLeft:5}}>{userPoints}/{milestonePoints}</span>
                                } 
                                 {userPoints<=(0.5*milestonePoints) && 
                                   <span className="text-xs font-weight-bold text-warning text-uppercase mb-1" style={{fontSize: 12, marginLeft:5}}>{userPoints}/{milestonePoints}</span>
                                }
                             
                            </a>
                            <a className="dropdown-item" href="#">
                              <ProgressBar id="progressBar1" value={userPoints*100/milestonePoints}></ProgressBar>
                              {milestonePoints-userPoints} more points to reach Milestone!
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                         className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                    {/* <!-- My Rewards --> */}
                    <div className="col-xl-4 col-md-6 mb-5">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            My Rewards</div>
                                        
                                        <a href="#" onClick={()=> showReward(0)}>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">Reward 1</div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" maximizable modal style={{ height:'70vw' }}  visible={showRewardDialog[0]} onHide={() => hideRewardDialog()}>
                                            <img height="350px" src="img/trophy_3_1st.gif">
                                            </img>
                                        </Dialog>
                                         

                                        
                                        {/* {this.state.taskOwner===true && <Dialog header="Tasks" visible={this.state.displayMaximizable} maximizable modal style={{ width: '20vw' }} onHide={() => this.onHide('displayMaximizable')}>
                                            <p>Select task :</p>
                                            <ListBox value={this.state.selectedTaskOwner} options={this.taskOwnerOptions} onChange={this.onTaskOwnerSelect}  />
                                        </Dialog>} */}
                                        
                                        {/* Pranjal: add dialog box with img tag src = from gifs (for each reward add a separate dialog box with diff file path)  */}
                                        
                                        <a href="#" onClick={()=> showReward(1)}>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">Reward 2</div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" maximizable modal style={{ height:'70vw', backgroundColor:'#13132b'}} visible={showRewardDialog[1]} onHide={() => hideRewardDialog()}>
                                            <img height="350px" src="img/bronze_medal.gif">
                                            </img>
                                        </Dialog>

                                        <a href="#" onClick={()=> showReward(2)}>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">Reward 3</div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" maximizable modal style={{ height:'70vw' }}  visible={showRewardDialog[2]} onHide={() => hideRewardDialog()}>
                                            <img height="350px" src="img/trapeze_trophy_1st.gif">
                                            </img>
                                        </Dialog>

                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Leaderboard --> */}
                    <div className="col-xl-4 col-md-6 mb-5">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Leaderboard</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            table add
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Points Allocation --> */}
                    <div className="col-xl-4 col-md-6 mb-5">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Points Allocation</div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <Tooltip target='#order1' content="Low Score (Order approval delayed)"/>
                                                <Tooltip target='#order2' content="High Score (Superfast Approval!)"/>
                                                <Tooltip target='#order3' content="Med Score (Order halted)"/>
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="order1">Order 1: 30</div>
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="order2">Order 2: 90</div>
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="order3">Order 3: 70</div>
                                            </div>
                                            {/* <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info a1" role="progressbar"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Notifications --> */}
                    <div className="col-xl-12 col-md-6 mb-5">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Notifications</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">ABC</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">DIP XUS</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">5 days till freedom</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 


                {/* <!-- Content Row --> */}

                {/* <div className="row"> */}

                    {/* <!-- Area Chart --> */}
                    {/* <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4"> */}
                            {/* <!-- Card Header - Dropdown --> */}
                            {/* <div
                             className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Card Body --> */}
                            {/* <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <!-- Pie Chart --> */}
                    {/* <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4"> */}
                            {/* <!-- Card Header - Dropdown --> */}
                            {/* <div
                             className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Card Body --> */}
                            {/* <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <!-- Content Row --> */}
                {/* <div className="row"> */}

                    {/* <!-- Content Column --> */}
                    {/* <div className="col-lg-6 mb-4"> */}

                        {/* <!-- Project Card Example --> */}
                        {/* <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Server Migration <span
                                     className="float-right">20%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-danger a2" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Sales Tracking <span
                                     className="float-right">40%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-warning a3" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Customer Database <span
                                     className="float-right">60%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar a4" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Payout Details <span
                                     className="float-right">80%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-info a5" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Account Setup <span
                                     className="float-right">Complete!</span></h4>
                                <div className="progress"> */}
                                    {/* A6 */}
                                   
            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2021</span>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

</div>
{/* <!-- End of Page Wrapper --> */}

{/* <!-- Scroll to Top Button--> */}
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}
<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>

</body>
    </div>
  )
}

export default Dashboard
