import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Smartphone,
  Lock,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Database,
  CreditCard,
  UserCheck,
  Package,
  FileText,
  Megaphone,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                LifestyleERP
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-red-400 transition-colors">
                Services
              </Link>
              <Link href="#erp" className="text-gray-300 hover:text-red-400 transition-colors">
                ERP Systems
              </Link>
              <Link href="#security" className="text-gray-300 hover:text-red-400 transition-colors">
                Cybersecurity
              </Link>
              <Link href="#marketing" className="text-gray-300 hover:text-red-400 transition-colors">
                Digital Marketing
              </Link>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20">
              🚀 Next-Gen Enterprise Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight">
              Future-Ready Business Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ERP systems, cutting-edge cybersecurity, and AI-powered digital marketing for fashion, retail,
              restaurant, and lifestyle brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg px-8 py-4 shadow-lg shadow-red-500/25 text-white"
              >
                Launch Your Digital Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400 hover:text-red-300"
              >
                Watch Tech Demo
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 shadow-lg shadow-green-500/25"
              >
                <a
                  href="https://wa.me/8801521430255?text=Hi%Lifestyleerp%20Solutions!%20I'm%20interested%20in%20your%20ERP%20systems%20and%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Advanced Tech Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge digital infrastructure designed to revolutionize business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-700 bg-gray-800/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/25">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Enterprise ERP</CardTitle>
                <CardDescription className="text-gray-400">AI-powered business management ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Smart HRM & Payroll Automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Advanced Financial Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    AI-Driven CRM & Insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Next-Gen POS & Inventory
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-700 bg-gray-800/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Cyber Defense</CardTitle>
                <CardDescription className="text-gray-400">Military-grade security infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    AI Threat Detection & Response
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Quantum-Safe Encryption
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Zero-Trust Architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                    Continuous Security Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-700 bg-gray-800/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Digital Growth</CardTitle>
                <CardDescription className="text-gray-400">AI-powered marketing automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Machine Learning SEO
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Automated Social Campaigns
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time Performance Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ERP Features Section */}
      <section id="erp" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">ERP Excellence</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Intelligent Business Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary ERP platform engineered for fashion, retail, restaurant, and lifestyle enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <UserCheck className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Smart HRM</h3>
              <p className="text-sm text-gray-400">AI-powered workforce management and analytics</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">FinTech Core</h3>
              <p className="text-sm text-gray-400">Advanced financial automation and compliance</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">CRM Intelligence</h3>
              <p className="text-sm text-gray-400">Predictive customer relationship management</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <CreditCard className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Smart POS</h3>
              <p className="text-sm text-gray-400">Next-generation point of sale system</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <Package className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Inventory AI</h3>
              <p className="text-sm text-gray-400">Intelligent stock optimization and forecasting</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <FileText className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Analytics Engine</h3>
              <p className="text-sm text-gray-400">Real-time business intelligence and insights</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <Smartphone className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Mobile Command</h3>
              <p className="text-sm text-gray-400">Cross-platform mobile management suite</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg hover:shadow-red-500/10 transition-all bg-gray-800/50 backdrop-blur border border-gray-700">
              <Globe className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Global Scale</h3>
              <p className="text-sm text-gray-400">Multi-location enterprise management</p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25"
            >
              Explore ERP Architecture
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

       {/* ERP Modules Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">ERP Modules</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Complete ERP System Modules</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business management modules designed for seamless integration and maximum efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Module 1: Inventory Management */}
            <Card className="bg-gray-800/50 backdrop-blur border border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-500/25">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">1. Inventory Management System</CardTitle>
                    <CardDescription className="text-red-400">Easy Stock Management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Manage Multiple Inventory
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Barcode & Label Printing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Product Attributes Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Product Category Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Unlimited Product or Item
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Multiple Product Attribute
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Bulk Product Import
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    Product Sourcing Panel
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 2: Point of Sales */}
            <Card className="bg-gray-800/50 backdrop-blur border border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-lg hover:shadow-green-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-green-500/25">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">2. Point of Sales (POS)</CardTitle>
                    <CardDescription className="text-green-400">Invoicing or Billing System</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Single Invoice Multiple Measurement System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Integrated CRM for Customer Filtering or Searching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Dynamic Processing Status and Tracking System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Dynamic Discount, Coupon System
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 3: Supplier/Vendor Management */}
            <Card className="bg-gray-800/50 backdrop-blur border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">3. Supplier/Vendor Management</CardTitle>
                    <CardDescription className="text-purple-400">Vendor/Supplier Master Database</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    Supplier Entry Form
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    Supplier Activation and Status System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    Powerful Searching and Filtering System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    Debit Supplier Management System
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 4: Customer Management */}
            <Card className="bg-gray-800/50 backdrop-blur border border-orange-500/20 hover:border-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-orange-500/25">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">4. Customer Management</CardTitle>
                    <CardDescription className="text-orange-400">Customer Entry Form</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    Customer Activation and Status System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    Powerful Searching and Filtering System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    Customer Wise Coupon System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    Credit Customer Management System
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 5: HRM and Payroll */}
            <Card className="bg-gray-800/50 backdrop-blur border border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-indigo-500/25">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">
                      5. Human Resources Management (HRM) and Payroll
                    </CardTitle>
                    <CardDescription className="text-indigo-400">Employee Database</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                    Create New Department, Designation & Employee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                    Employee File Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                    Employee Termination Panel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                    Notification, SMS, Mailing System
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 6: Accounting Management */}
            <Card className="bg-gray-800/50 backdrop-blur border border-teal-500/20 hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">6. Accounting Management System</CardTitle>
                    <CardDescription className="text-teal-400">3 Layers Chart of Accounts</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Mapping of Chart of Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Loan Management System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Add Unlimited Chart of Accounts Head
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Chart of Accounts Wise Ledger
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 7: Reporting Module */}
            <Card className="bg-gray-800/50 backdrop-blur border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:shadow-lg hover:shadow-yellow-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-yellow-500/25">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">7. Reporting Module</CardTitle>
                    <CardDescription className="text-yellow-400">Sales Report</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Product Entry Report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Due Report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Due Collection Dynamic Report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Sold Product Report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Stock Report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    Purchase Report
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 8: User Privilege and Management */}
            <Card className="bg-gray-800/50 backdrop-blur border border-pink-500/20 hover:border-pink-500/40 transition-all hover:shadow-lg hover:shadow-pink-500/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-pink-500/25">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">8. User Privilege and User Management</CardTitle>
                    <CardDescription className="text-pink-400">Dynamic Office Settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                    Department Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                    Managing Multiple Warehouses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                    Dynamic User Access Control Panel and Privilege System
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                    User Notification, SMS, Mailing System
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center  mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25 text-white"
            >
              Explore All ERP Modules
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      {/* <section id="security" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">Cyber Defense</Badge>
              <h2 className="text-4xl font-bold mb-6 text-white">Military-Grade Cybersecurity Infrastructure</h2>
              <p className="text-lg text-gray-300 mb-8">
                Advanced threat protection powered by AI and machine learning. Our cybersecurity solutions provide
                enterprise-grade protection against evolving digital threats.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Lock className="w-6 h-6 text-red-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">AI Threat Detection</h3>
                    <p className="text-gray-400">Real-time threat analysis and automated response</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-red-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Zero-Trust Security</h3>
                    <p className="text-gray-400">Advanced encryption and secure access protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Compliance Automation</h3>
                    <p className="text-gray-400">GDPR, HIPAA, and industry-specific compliance</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/25">
                Security Assessment
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-red-500/20">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center bg-gray-800/50 border border-gray-700">
                    <div className="text-2xl font-bold text-red-400">99.99%</div>
                    <div className="text-sm text-gray-400">Uptime SLA</div>
                  </Card>
                  <Card className="p-4 text-center bg-gray-800/50 border border-gray-700">
                    <div className="text-2xl font-bold text-red-400">24/7</div>
                    <div className="text-sm text-gray-400">SOC Monitoring</div>
                  </Card>
                  <Card className="p-4 text-center bg-gray-800/50 border border-gray-700">
                    <div className="text-2xl font-bold text-red-400">{"<30s"}</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </Card>
                  <Card className="p-4 text-center bg-gray-800/50 border border-gray-700">
                    <div className="text-2xl font-bold text-red-400">100%</div>
                    <div className="text-sm text-gray-400">Threat Detection</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Digital Marketing Section */}
      {/* <section id="marketing" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-green-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Megaphone className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white">Brand Engineering</h3>
                    <p className="text-sm text-gray-400">AI-driven brand development and positioning</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white">Precision Targeting</h3>
                    <p className="text-sm text-gray-400">Machine learning audience optimization</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white">Predictive Analytics</h3>
                    <p className="text-sm text-gray-400">Advanced performance forecasting</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white">Growth Automation</h3>
                    <p className="text-sm text-gray-400">Scalable growth hacking strategies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">Digital Growth</Badge>
              <h2 className="text-4xl font-bold mb-6 text-white">AI-Powered Marketing Automation</h2>
              <p className="text-lg text-gray-300 mb-8">
                Revolutionary marketing technology that leverages artificial intelligence and machine learning to
                deliver unprecedented growth and ROI for your business.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Machine Learning SEO Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Automated Social Media Intelligence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Predictive PPC Campaign Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Real-time Performance Analytics</span>
                </div>
              </div>

              <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/25">
                Launch Growth Campaign
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Tech Leaders Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets unparalleled expertise to deliver transformational results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                <Star className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Tech Innovation</h3>
              <p className="text-gray-400">10+ years pioneering enterprise technology solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Lightning Deployment</h3>
              <p className="text-gray-400">Rapid implementation with zero downtime migration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">24/7 Tech Support</h3>
              <p className="text-gray-400">Global support team with instant response capability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Proven ROI</h3>
              <p className="text-gray-400">Average 400% ROI within 12 months of deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Connect With Our Tech Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Our team of technology specialists is here to help you build the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur border border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-red-400 font-medium">m3solutions@gmail.com</p>
              <p className="text-gray-400 text-sm mt-2">24/7 Response Guarantee</p>
            </Card>

            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur border border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-lg hover:shadow-green-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call Direct</h3>
              <p className="text-green-400 font-medium">+880-1521430255</p>
              <p className="text-gray-400 text-sm mt-2">Instant Tech Support</p>
            </Card>

            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
              <p className="text-purple-400 font-medium">LifestyleERP</p>
              <p className="text-gray-400 text-sm mt-2">Dhaka, Bangladesh</p>
            </Card>

            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur border border-orange-500/20 hover:border-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Business Hours</h3>
              <p className="text-orange-400 font-medium">24/7 Available</p>
              <p className="text-gray-400 text-sm mt-2">Global Support Coverage</p>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg text-white px-8 py-4 shadow-lg shadow-red-500/25"
              >
                Schedule Tech Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400 hover:text-red-300"
              >
                Request System Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join the digital revolution. Transform your business with cutting-edge technology solutions that deliver
            measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
              Start Digital Transformation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 bg-transparent"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                  LifestyleERP
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Pioneering the future of enterprise technology with innovative solutions that drive digital
                transformation.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-gray-700">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-gray-700">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-gray-700">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Enterprise ERP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Mobile Applications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Fashion & Retail
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Restaurants & Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Lifestyle Brands
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    E-commerce Platforms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-red-400" />
                  m3solution@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-red-400" />
                  +8801521430255
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-red-400" />
                  Dhaka, Bangladesh
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-400" />
                  24/7 Support Available
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LifestyleERP. All rights reserved. | Privacy Policy | Terms of Service | Security</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
