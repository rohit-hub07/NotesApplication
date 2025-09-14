# Multi-Tenant Notes Application

## Overview
This project implements a *multi-tenant notes application* with support for two organizations:
- *Acme*
- *Globex*

Each tenant’s data is strictly isolated to prevent cross-tenant access.  
The system supports authentication, role-based access, subscription plans, and CRUD operations for notes.

---

## Multi-Tenancy Approach
We use the *Shared Schema with Tenant ID Column* approach.

- A single MongoDB database is used.  
- All collections (tenants, users, notes) are shared across tenants.  
- Tenant isolation is achieved by including a tenant reference (ObjectId) in both *User* and *Note* documents.  
- Queries are always scoped by the authenticated user’s tenant, ensuring strict data isolation.

---

