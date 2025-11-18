Redux Folder Structure

src/
├── store/
│   └── store.js                     # Registers both productReducer and userReducer
├── features/
│   ├── servicesProvide/
│   │   ├── api/
│   │   │   └── servicesAPI.js        # Axios functions for services-related backend calls
│   │   ├── actions/
│   │   │   └── servicesThunks.js     # createAsyncThunk-based async actions for products
│   │   ├── reducers/
│   │   │   └── servicesReducer.js    # Redux slice for services with initialState, reducers
│   │   └── index.js                 # Re-exports productReducer and productThunks/actions
│   └── user/
│       ├── api/
│       │   └── userAPI.js           # Axios functions for user-related backend calls
│       ├── actions/
│       │   └── userThunks.js        # createAsyncThunk-based async actions for user
│       ├── reducers/
│       │   └── userReducer.js       # Redux slice for user with initialState, reducers
│       └── index.js                 # Re-exports userReducer and userThunks/actions
├── services/
│   └── axiosInstance.js             # Shared Axios instance for API calls




Routing 

src/
└── router/
    ├── AppRouter.jsx         # Main router that defines all <Routes> and page paths
    ├── PrivateRoute.jsx      # Protects authenticated (private) routes
    └── PublicRoute.jsx       # Blocks access to auth pages for already logged-in users


