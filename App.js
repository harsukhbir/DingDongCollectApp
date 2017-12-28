/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';
import { SignupPageOne } from './App/Screens/SignupPageOne';
import { SignupPageTwo } from './App/Screens/SignupPageTwo';
import { SignupPageThree } from './App/Screens/SignupPageThree';
import { SignupPageFour } from './App/Screens/SignupPageFour';
import { SignupPolicyPage } from './App/Screens/SignupPolicyPage';


import { LoginPage } from './App/Screens/LoginPage';
import { LoginForgotPswdPage } from './App/Screens/LoginForgotPswdPage';

import { FbLoginPage } from './App/Screens/FbLoginPage';

import { HomePage } from './App/Screens/HomePage';
import { Menu } from './App/Screens/Menu';
import { MyDonationsPage } from './App/Screens/MyDonationsPage';
import { MyCollectionsPage } from './App/Screens/MyCollectionsPage';
import { CollectionsFooter } from './App/Screens/CollectionsFooter';

import { CollectionsAccepted } from './App/Screens/CollectionsAccepted';
import { CollectionsAcceptedDetails } from './App/Screens/CollectionsAcceptedDetails';
import { PhotoOfReceipt } from './App/Screens/PhotoOfReceipt';
import { PhotoOfReceiptFinalizeDetails } from './App/Screens/PhotoOfReceiptFinalizeDetails';

import { CollectionsFinalized } from './App/Screens/CollectionsFinalized';
import { CollectionsPending } from './App/Screens/CollectionsPending';
import { CollectionsPendingDetails } from './App/Screens/CollectionsPendingDetails';
import { CollectionsRejected } from './App/Screens/CollectionsRejected';

import { MessagesPage } from './App/Screens/MessagesPage';
import { MessagesOne2One } from './App/Screens/MessagesOne2One';

import { MySpotsPage } from './App/Screens/MySpotsPage';
import { MyAccountPage } from './App/Screens/MyAccountPage';
import { InviteAFriendPage } from './App/Screens/InviteAFriendPage';
import { MembershipPage } from './App/Screens/MembershipPage';
import { RewardsOptionsPage } from './App/Screens/RewardsOptionsPage';

import { DonationCancelled } from './App/Screens/DonationCancelled';
import { DonationCancelledDetails } from './App/Screens/DonationCancelledDetails';
import { DonationCancelledEdit } from './App/Screens/DonationCancelledEdit';

import { DonationCompleted } from './App/Screens/DonationCompleted';
import { DonationCompletedDetails } from './App/Screens/DonationCompletedDetails';

import { DonationPending } from './App/Screens/DonationPending';
import { DonationPendingDetails } from './App/Screens/DonationPendingDetails';

import { DonationAddPage } from './App/Screens/DonationAddPage';
import { DonationFooter } from './App/Screens/DonationFooter';
import { BoyScoutsPage } from './App/Screens/BoyScoutsPage';


export class App extends Component {
  render() {
    return (

      <Router>
        <Scene key="root" hideNavBar>
         
          <Scene key="SignupPageOne" component={SignupPageOne} initial/>
          <Scene key="SignupPageTwo" component={SignupPageTwo} />
          <Scene key="SignupPageThree" component={SignupPageThree} />
          <Scene key="SignupPageFour" component={SignupPageFour} />
          <Scene key="SignupPolicyPage" component={SignupPolicyPage} />
          <Scene key="LoginPage" component={LoginPage} />
          <Scene key="LoginForgotPswdPage" component={LoginForgotPswdPage} />
          
          <Scene key="FbLoginPage" component={FbLoginPage} />


          <Scene key="HomePage" component={HomePage} />
          <Scene key="Menu" component={Menu} />
          <Scene key="MyDonationsPage" component={MyDonationsPage} />
          <Scene key="MyCollectionsPage" component={MyCollectionsPage} />
          <Scene key="CollectionsFooter" component={CollectionsFooter} />

          <Scene key="CollectionsAccepted" component={CollectionsAccepted} />
          <Scene key="CollectionsAcceptedDetails" component={CollectionsAcceptedDetails} />
          <Scene key="PhotoOfReceipt" component={PhotoOfReceipt} />
          <Scene key="PhotoOfReceiptFinalizeDetails" component={PhotoOfReceiptFinalizeDetails} />


          <Scene key="CollectionsFinalized" component={CollectionsFinalized} />

          <Scene key="CollectionsPending" component={CollectionsPending} />
          <Scene key="CollectionsPendingDetails" component={CollectionsPendingDetails} />

          <Scene key="CollectionsRejected" component={CollectionsRejected} />


          <Scene key="MessagesPage" component={MessagesPage} />
          <Scene key="MessagesOne2One" component={MessagesOne2One} />

          <Scene key="MySpotsPage" component={MySpotsPage} />
          <Scene key="MyAccountPage" component={MyAccountPage} />
          <Scene key="InviteAFriendPage" component={InviteAFriendPage} />
          <Scene key="MembershipPage" component={MembershipPage} />
          <Scene key="RewardsOptionsPage" component={RewardsOptionsPage} />

          <Scene key="DonationCancelled" component={DonationCancelled} />
          <Scene key="DonationCancelledDetails" component={DonationCancelledDetails} />
          <Scene key="DonationCancelledEdit" component={DonationCancelledEdit} />

          <Scene key="DonationCompleted" component={DonationCompleted} />
          <Scene key="DonationCompletedDetails" component={DonationCompletedDetails} />

          <Scene key="DonationPending" component={DonationPending} />
          <Scene key="DonationPendingDetails" component={DonationPendingDetails} />

          <Scene key="DonationAddPage" component={DonationAddPage} />
          <Scene key="DonationFooter" component={DonationFooter} />
          <Scene key="BoyScoutsPage" component={BoyScoutsPage} />


        </Scene>
      </Router>
    )
  }
}

export default App;