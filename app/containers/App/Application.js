import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  Agents,
  AgentCreation,
  AgentWorkflows,
  AgentWorkflowManagement,
  AgentWorkflowTemplates,
  CallLogs,
  Contacts
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Routes>
        { /* Home */}
        <Route exact path="/" element={<BlankPage />} />
        <Route path="pages/dashboard" element={<DashboardPage />} />
        <Route path="pages/form" element={<Form />} />
        <Route path="pages/table" element={<Table />} />
        <Route path="pages/page-list" element={<Parent />} />
        <Route path="pages/pages/not-found" element={<NotFound />} />
        <Route path="pages/pages/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
        {/* New pages */}
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/creation" element={<AgentCreation />} />
        <Route path="/agents/workflows" element={<AgentWorkflows />} />
        <Route path="/agents/workflows/management" element={<AgentWorkflowManagement />} />
        <Route path="/agents/workflow_templates" element={<AgentWorkflowTemplates />} />
        <Route path="/agents/call_logs" element={<CallLogs />} />
        <Route path="/agents/contacts" element={<Contacts />} />
      </Routes>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
