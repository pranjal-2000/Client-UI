import React, { useState,useEffect } from "react";
import "./Dashboard.css";
const { Dialog } = require('primereact/dialog');
const { Tooltip } = require('primereact/tooltip');
const { ProgressBar } = require('primereact/progressbar');
const { TreeTable } = require('primereact/treetable');
const { Column } = require('primereact/column');
const { Image } = require('primereact/image')



function Dashboard() {
    //reward dialog
    const [showRewardDialog, setShowRewardDialog] = useState([false, false, false]);
    //points dialog
    const [showPointsDialog, setShowPointsDialog] = useState(false);
    //badge dialog
    const [showBadgeDialog, setShowBadgeDialog] = useState(false);

    //user's current points
    const [userPoints, setUserPoints] = useState(1947);

    //total points needed for each milestone
    const [milestonePoints, setMilestonePoints] = useState(2000);

    const [badge, setBadge] = useState("img/Badge1.svg");

    //leaderboard table
    let node=[
        {
        "key": "0",
        "data":{
            "Rank":"1",
            "Name":"David Green",
            "Team":"Sales",
            "Score":"3000/5000"
            }   
        },
        {
        "key": "1",
        "data":{
            "Rank":"2",
            "Name":"Rachel Stone",
            "Team":"Sales",
            "Score":"2800/5000"
            }
        },
        {
        "key": "2",
        "data":{
            "Rank":"3",
            "Name":"Douglas Mcgee (You)",
            "Team":"Production",
            "Score":"2770/5000"
            }
        },
        {
        "key": "3",
        "data":{
            "Rank":"4",
            "Name":"Kate Heather",
            "Team":"Inventory",
            "Score":"2500/5000"
            }
        },
        {
            "key": "4",
            "data":{
                "Rank":"5",
                "Name":"Simon Walker",
                "Team":"Production",
                "Score":"2000/5000"
                }
            },


      ]


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

    function hidePointsDialog(){
        setShowPointsDialog(false);
        setShowBadgeDialog(true);
    }

    function hideBadgeDialog(){
        setBadge("img/Badge2.svg");
        setShowBadgeDialog(false);
    }

    function addNotif() {
        var div = document.getElementById("notif4");
        div.style.display = "block";
        console.log("Function1 callled")
      }

    function addPoints() {
        var div = document.getElementById("order4");
        div.style.display = "block";
        let newUserPts = ((userPoints + 70)-2000);
        setUserPoints(newUserPts);
        setShowPointsDialog(true);
        console.log("Function2 callled")
      }

    useEffect(() => {
        setTimeout(addNotif, 5000);
        setTimeout(addPoints, 7000);
        return () => {
        };
      }, []);

  return (
    <body>
        
    <div>
{/* <!-- Page Wrapper --> */}
<body id="page-top">
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
                                src={badge}/></span>
                        </a>
                        {/* <!-- Dropdown - User Information --> */}
                        <div style={{width:'300px'}} className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            
                            <a style={{alignItems: 'center'}} className="dropdown-item" href="#">
                                {/* <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> */}
                                <img style={{marginLeft:65}} className="img-profile rounded-circle"
                                src={badge}/>
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
                                        <div className="text-s font-weight-bold text-primary text-uppercase mb-1">
                                            My Rewards</div>
                                        
                                        <a href="#" onClick={()=> showReward(0)}>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">FastestApprover (1st)</div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" footer="That was lightning fast! You Approved 326 orders in the past week!" maximizable modal style={{ height:'70vw' }}  visible={showRewardDialog[0]} onHide={() => hideRewardDialog()}>
                                            <img height="350px" src="img/trophy_3_1st.gif">
                                            </img>
                                        </Dialog>
                                         

                                        
                                        {/* {this.state.taskOwner===true && <Dialog header="Tasks" visible={this.state.displayMaximizable} maximizable modal style={{ width: '20vw' }} onHide={() => this.onHide('displayMaximizable')}>
                                            <p>Select task :</p>
                                            <ListBox value={this.state.selectedTaskOwner} options={this.taskOwnerOptions} onChange={this.onTaskOwnerSelect}  />
                                        </Dialog>} */}
                                        
                                        {/* Pranjal: add dialog box with img tag src = from gifs (for each reward add a separate dialog box with diff file path)  */}
                                        
                                        <a href="#" onClick={()=> showReward(1)}>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">QualityRacer (3rd) </div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" footer="You balance so well between Speed And Quality! 239/257 Checked Orders Satisfied our mandatory Quality Requirements!" maximizable modal style={{ height:'70vw', backgroundColor:'#13132b'}} visible={showRewardDialog[1]} onHide={() => hideRewardDialog()}>
                                            <img style={{position:'relative', left:'100px'}} height="350px" src="img/bronze_medal.gif">
                                            </img>
                                        </Dialog>

                                        <a href="#" onClick={()=> showReward(2)}>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">QuickChecker (1st)</div>
                                        </a>
                                        <Dialog header="Congratulations! You just earned a Reward!" footer="Woah that was super Fast! You checked 257 Orders in the past week!"  maximizable modal style={{ height:'70vw' }}  visible={showRewardDialog[2]} onHide={() => hideRewardDialog()}>
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

                    {/* <!-- Notifications --> */}
                    <div className="col-xl-4 col-md-6 mb-5">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-s font-weight-bold text-warning text-uppercase mb-1">
                                            Notifications</div>
                                        <div id="notif1" className="h6 mb-0 font-weight-bold text-gray-800">Just in! New Order Received!</div>
                                        <div id="notif2" className="h6 mb-0 font-weight-bold text-gray-800">Order #CX9031 processed.</div>
                                        <div id="notif3" className="h6 mb-0 font-weight-bold text-gray-800">Order #TL2019 cancelled.</div>
                                        <div id="notif4" style={{display:"none"}} className="h6 mb-0 font-weight-bold text-gray-800">Order #GH5576 delayed.</div>

                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
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
                                        <div className="text-s font-weight-bold text-info text-uppercase mb-1">Points Allocation</div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <Tooltip target='#order1' content="Low Score (Order approval delayed)"/>
                                                <Tooltip target='#order2' content="High Score (Superfast Approval!)"/>
                                                <Tooltip target='#order3' content="Med Score (Order cancelled)"/>
                                                <Tooltip target='#order4' content="Med Score (Order halted)"/>
                                                <div className="h6 mb-0 mr-3 font-weight-bold text-gray-800" id="order1">Order CX0415: 30</div>
                                                <div className="h6 mb-0 mr-3 font-weight-bold text-gray-800" id="order2">Order CH0412: 90</div>
                                                <div className="h6 mb-0 mr-3 font-weight-bold text-gray-800" id="order3">Order CY0419: 50</div>
                                                <div className="h6 mb-0 mr-3 font-weight-bold text-gray-800" id="order4" style={{display:"none"}}>Order DA0422: 70</div>
                                                <Dialog header="Congratulations! You earned points!" footer="You just earned 70 points for Approving Order DA0422 in-time!" maximizable modal style={{ height:'70vw' }}  visible={showPointsDialog} onHide={() => hidePointsDialog()}>
                                                     <img style={{position:'relative', left:'50px'}} height="350px" src="img/points_earn(flag).gif"></img>
                                                </Dialog>
                                                <Dialog header="Congratulations! You just got Promoted to RACER!" footer="A Pat on your Back! Being as efficient as you are, you truly deserve this Title!" maximizable modal style={{ height:'50vw' }}  visible={showBadgeDialog} onHide={() => hideBadgeDialog()}>
                                                    <img style={{position:'relative', left:'100px'}} height="350px" src="img/BT_3to4.gif"></img>
                                                </Dialog>
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

                    
                     {/* <!-- Leaderboard --> */}
                     <div className="col-xl-12 col-md-6 mb-5">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-s font-weight-bold text-success text-uppercase mb-1" style={{marginBottom:20}}>
                                            Leaderboard</div>
                                        <div className="box">
                                            <TreeTable value={node} className="leaderboard" tableStyle={{ minWidth: '50rem'}}>
                                            <Column field="Rank" header="Rank"></Column>
                                            <Column field="Name" header="Name"></Column>
                                            <Column field="Team" header="Team"></Column> 
                                            <Column field="Score" header="Score"></Column>
                                            </TreeTable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
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
    </body>
  )
}

export default Dashboard
