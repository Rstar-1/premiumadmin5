import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./pages/error/Error";
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Crm from "./pages/admin/layouts/components/crm/Crm";
import Blog from "./pages/admin/layouts/components/blog/Blog";
import Elearning from "./pages/admin/layouts/components/elearning/Elearning";
import Ecommerce from "./pages/admin/layouts/components/ecommerce/Ecommerce";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import CMS from "./pages/admin/layouts/components/cms/CmsPages"
import Billing from "./pages/admin/layouts/components/billing/Billing";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Subscription from "./pages/admin/layouts/components/subscription/Subscription";
import PlanEdit from "./pages/admin/layouts/components/subscription/components/basic/components/PlanEdit";
import PlanEdit2 from "./pages/admin/layouts/components/subscription/components/premium/components/PlanEdit";
import PlanEdit3 from "./pages/admin/layouts/components/subscription/components/superpremium/components/PlanEdit";
import EditSeo from "./pages/admin/layouts/components/seo/components/EditSeo";
import Project from "./pages/admin/layouts/components/project/Project";
import EditText from "./pages/admin/layouts/components/cms/components/textcms/components/EditText";
import EditImage from "./pages/admin/layouts/components/cms/components/imagecms/components/EditImage";
import Enquiry from "./pages/admin/layouts/components/enquiry/Enquiry";
import EnquiryEdit from "./pages/admin/layouts/components/enquiry/components/basic/components/EnquiryEdit";
import EnquiryEdit2 from "./pages/admin/layouts/components/enquiry/components/premium/components/EnquiryEdit";
import EnquiryEdit3 from "./pages/admin/layouts/components/enquiry/components/superpremium/components/EnquiryEdit";
import Coming from "./pages/admin/layouts/components/coming/Coming";
import EditProject from "./pages/admin/layouts/components/project/components/EditProject";
import Brands from "./pages/admin/layouts/components/brands/Brands";
import EditBrand from "./pages/admin/layouts/components/brands/components/EditBrand";
import Review from "./pages/admin/layouts/components/review/Review";
import EditReview from "./pages/admin/layouts/components/review/components/EditReview";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <div className="flex gap-9 bg-e8f2fc h-100 overflow-hidden ">
          <div className="w-side">
            <Sidebar />
          </div>
          <div className="w-route">
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              {/* ======================= Start-Login ======================= */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* ======================= Start-Login ======================= */}
              {/* ======================= Start-Pages ======================= */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/editplan/:id" element={<PlanEdit />} />
              <Route path="/editplan2/:id" element={<PlanEdit2 />} />
              <Route path="/editplan3/:id" element={<PlanEdit3 />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/editenquiry/:id" element={<EnquiryEdit />} />
              <Route path="/editenquiry2/:id" element={<EnquiryEdit2 />} />
              <Route path="/editenquiry3/:id" element={<EnquiryEdit3 />} />
              <Route path="/project" element={<Project />} />
              <Route path="/editproject/:id" element={<EditProject />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/editbrand/:id" element={<EditBrand />} />
              <Route path="/review" element={<Review />} />
              <Route path="/editreview/:id" element={<EditReview />} />
              <Route path="/crm" element={<Crm />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/cms" element={<CMS />} />
              <Route path="/edittext/:id" element={<EditText />} />
              <Route path="/editimage/:id" element={<EditImage />} />
              <Route path="/seo" element={<Seo />} />
              <Route path="/editseo/:id" element={<EditSeo />} />
              <Route path="/billing" element={<Billing />} />
              {/* ======================= End-Pages ======================= */}
              {/* ======================= Start-Error ======================= */}
              <Route path="*" element={<Error />} />
              <Route path="/coming" element={<Coming />} />
              {/* ======================= End-Error ======================= */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
