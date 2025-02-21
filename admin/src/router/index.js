import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '../views/AdminDashboard.vue';

const router = createRouter({
  history: createWebHistory('/admin/'),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: AdminDashboard,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/scan-results',
      name: 'scan-results',
      component: () => import('../views/ScanResults.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/physician-consultation',
      name: 'physician-consultation',
      component: () => import('../views/PhysicianConsultation.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/notifications-announcements',
      name: 'notifications-announcements',
      component: () => import('../views/NotificationsAnnouncements.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/system-settings',
      name: 'system-settings',
      component: () => import('../views/SystemSettings.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/logs-audit-trail',
      name: 'logs-audit-trail',
      component: () => import('../views/LogsAuditTrail.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/reports-analytics',
      name: 'reports-analytics',
      component: () => import('../views/ReportsAnalytics.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/support-ticketing',
      name: 'support-ticketing',
      component: () => import('../views/SupportTicketing.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/account-settings',
      name: 'account-settings',
      component: () => import('../views/AccountSettings.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
});

export default router;
