import { Routes } from '@angular/router';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layout views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { EditCompany } from './views/user/edit-company/edit-company';
import { UserComponent } from './views/user/user/user.component';
import { UserProfileComponent } from './views/user/user-profile/user-profile.component';
import { CompanyRegisterComponent } from './views/auth/company-register/company-register.component';
import { WorkflowMasterComponent } from './views/admin/workflow/workflow-master/workflow-master.component';
import { WorkflowLevelComponent } from './views/admin/workflow/workflow-level/workflow-level.component';
import { ListViewComponent } from './views/admin/company/list-view/list-view.component';
import { WorkflowListComponent } from './views/admin/workflow/workflow-list/workflow-list.component';
import { RoleListComponent } from './views/admin/role/role-list/role-list.component';
import { RoleMasterComponent } from './views/admin/role/role-master/role-master.component';
import { PassRuleListComponent } from './views/admin/pass-rule/pass-rule-list/pass-rule-list.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'workflow', component: WorkflowListComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-config', component: RoleMasterComponent },
      { path: 'workflow-master', component: WorkflowMasterComponent },
      { path: 'workflow-level', component: WorkflowLevelComponent },
      { path: 'comp-list', component: ListViewComponent },
      { path: 'pass-rules', component: PassRuleListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'company-register', component: CompanyRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      { path: "user-profile", component: UserProfileComponent },
      { path: "", component: UserProfileComponent },
      { path: "", redirectTo: "user-profile", pathMatch: "full" },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditCompany },
  { path: 'landing', component: LandingComponent },
  { path: '', component: IndexComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
