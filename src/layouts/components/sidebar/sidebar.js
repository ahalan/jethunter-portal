// import external modules
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
// Styling
import '../../../assets/scss/components/sidebar/sidebar.scss';
// import internal(own) modules
import SideMenuContent from './sidemenu/sidemenu';
import SidebarHeader from './sidebarHeader/sidebarHeader';
import {FoldedContentConsumer} from '../../../utility/context/toggleContentContext';
import templateConfig from '../../../templateConfig';

class Sidebar extends Component {
   state = {
     collapsedSidebar: templateConfig.sidebar.collapsed,
     width: window.innerWidth
   };
   updateWidth = () => {
     this.setState((prevState) => ({
       width: window.innerWidth
     }));
   };

    handleCollapsedSidebar = (collapsedSidebar) => {
      this.setState({collapsedSidebar});
    }

    componentDidMount() {
      if (window !== 'undefined') {
        window.addEventListener('resize', this.updateWidth, false);
      }
    }

    componentWillUnmount() {
      if (window !== 'undefined') {
        window.removeEventListener('resize', this.updateWidth, false);
      }
    }
   handleMouseEnter = (e) => {
     this.setState((prevState) => ({
       collapsedSidebar: false
     }));
   };

   handleMouseLeave = (e) => {
     this.setState((prevState) => ({
       collapsedSidebar: true
     }));
   };

   render() {
     return (
       <Fragment>
         <FoldedContentConsumer>
           {(context) => (
             <div
               data-active-color="white"
               data-background-color={(this.props.color === '') ? templateConfig.sidebar.backgroundColor: this.props.color}
               className={classnames('app-sidebar', {
                 '': !this.state.collapsedSidebar,
                 'collapsed': this.state.collapsedSidebar
               },
               {
                 'hide-sidebar': (this.state.width < 991 && this.props.sidebarState === 'close'),
                 '': this.props.sidebarState === 'open'
               }
               )}
               onMouseEnter={context.foldedContent ? this.handleMouseEnter : null}
               onMouseLeave={context.foldedContent ? this.handleMouseLeave : null}
             >
               <SidebarHeader toggleSidebarMenu={this.props.toggleSidebarMenu} sidebarBgColor={this.props.color} />
               <PerfectScrollbar className="sidebar-content">
                 <SideMenuContent collapsedSidebar={this.state.collapsedSidebar} toggleSidebarMenu={this.props.toggleSidebarMenu} />
               </PerfectScrollbar>
               <div
                 className="sidebar-background"
                 style={{backgroundImage: 'url(\'' + templateConfig.sidebar.backgroundImageURL + '\')'}}>
               </div>
             </div>
           )}
         </FoldedContentConsumer>
       </Fragment>
     );
   }
}

const mapStateToProps = (state) => ({
  color: '',
  img: '',
  imgurl: '',
  size: 'sidebar-md',
  collapsed: false
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
