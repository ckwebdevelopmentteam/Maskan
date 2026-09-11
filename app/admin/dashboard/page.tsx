"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Briefcase, Tags, MapPin, Plus, X, Eye, Trash2, BookOpen, ExternalLink } from 'lucide-react';

interface Category { _id: string; name: string; }
interface Location { _id: string; name: string; }
interface Career {
  _id: string;
  title: string;
  description: string;
  category?: { _id: string; name: string };
  location?: { _id: string; name: string };
}
interface Application {
  _id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  status: string;
  createdAt: string;
  resumeName?: string;
  resumeData?: string;
}

interface BlogAdminItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author?: { name: string; role?: string; avatar?: string };
  readingTime?: string;
  tags?: string[];
  isPublished: boolean;
  featured?: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'applications' | 'careers' | 'categories' | 'locations' | 'blogs'>('applications');
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [blogs, setBlogs] = useState<BlogAdminItem[]>([]);

  // Blog Form states
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSlug, setBlogSlug] = useState('');
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogCoverImage, setBlogCoverImage] = useState('');
  const [blogCategory, setBlogCategory] = useState('Architecture');
  const [blogAuthorName, setBlogAuthorName] = useState('Maskan Editorial Team');
  const [blogAuthorRole, setBlogAuthorRole] = useState('Architecture & Design Lead');
  const [blogTags, setBlogTags] = useState('');
  const [blogIsPublished, setBlogIsPublished] = useState(true);
  const [blogFeatured, setBlogFeatured] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form states
  const [catName, setCatName] = useState('');
  const [locName, setLocName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobCat, setJobCat] = useState('');
  const [jobLoc, setJobLoc] = useState('');

  const [appSearchQuery, setAppSearchQuery] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState('All');

  useEffect(() => {
    const t = localStorage.getItem('adminToken');
    if (!t) {
      router.push('/admin');
    } else {
      setToken(t);
      fetchData(t);
    }
  }, [router]);

  const fetchData = async (t: string) => {
    try {
      const [catRes, locRes, carRes, appRes, blogRes] = await Promise.all([
        fetch('/api/admin/career-categories', { headers: { Authorization: `Bearer ${t}` } }),
        fetch('/api/admin/career-locations', { headers: { Authorization: `Bearer ${t}` } }),
        fetch('/api/admin/careers', { headers: { Authorization: `Bearer ${t}` } }),
        fetch('/api/applications', { headers: { Authorization: `Bearer ${t}` } }),
        fetch('/api/admin/blogs', { headers: { Authorization: `Bearer ${t}` } }),
      ]);
      const catData = await catRes.json();
      const locData = await locRes.json();
      const carData = await carRes.json();
      const appData = await appRes.json();
      const blogData = await blogRes.json();

      if (catData.success) setCategories(catData.data);
      if (locData.success) setLocations(locData.data);
      if (carData.success) setCareers(carData.data);
      if (appData.success) setApplications(appData.data);
      if (blogData.success) setBlogs(blogData.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openEditModal = (type: string, item: any) => {
    setEditingId(item._id);
    if (type === 'category') {
      setCatName(item.name);
    } else if (type === 'location') {
      setLocName(item.name);
    } else if (type === 'career') {
      setJobTitle(item.title);
      setJobDesc(item.description);
      setJobCat(item.category?._id || '');
      setJobLoc(item.location?._id || '');
    } else if (type === 'blog') {
      setBlogTitle(item.title || '');
      setBlogSlug(item.slug || '');
      setBlogExcerpt(item.excerpt || '');
      setBlogContent(item.content || '');
      setBlogCoverImage(item.coverImage || '');
      setBlogCategory(item.category || 'Architecture');
      setBlogAuthorName(item.author?.name || 'Maskan Editorial Team');
      setBlogAuthorRole(item.author?.role || 'Architecture & Design Lead');
      setBlogTags(Array.isArray(item.tags) ? item.tags.join(', ') : '');
      setBlogIsPublished(Boolean(item.isPublished));
      setBlogFeatured(Boolean(item.featured));
    }
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingId(null);
    setCatName('');
    setLocName('');
    setJobTitle('');
    setJobDesc('');
    setJobCat('');
    setJobLoc('');
    setBlogTitle('');
    setBlogSlug('');
    setBlogExcerpt('');
    setBlogContent('');
    setBlogCoverImage('');
    setBlogCategory('Architecture');
    setBlogAuthorName('Maskan Editorial Team');
    setBlogAuthorRole('Architecture & Design Lead');
    setBlogTags('');
    setBlogIsPublished(true);
    setBlogFeatured(false);
    setIsModalOpen(true);
  };

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const url = editingId ? `/api/admin/career-categories/${editingId}` : '/api/admin/career-categories';
    const method = editingId ? 'PUT' : 'POST';
    
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name: catName })
    });
    if (res.ok) {
      setCatName('');
      setEditingId(null);
      setIsModalOpen(false);
      fetchData(token);
    }
  };

  const createLocation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const url = editingId ? `/api/admin/career-locations/${editingId}` : '/api/admin/career-locations';
    const method = editingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name: locName })
    });
    if (res.ok) {
      setLocName('');
      setEditingId(null);
      setIsModalOpen(false);
      fetchData(token);
    }
  };

  const createOrUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const url = editingId ? `/api/admin/blogs/${editingId}` : '/api/admin/blogs';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          title: blogTitle,
          slug: blogSlug || undefined,
          excerpt: blogExcerpt,
          content: blogContent,
          coverImage: blogCoverImage,
          category: blogCategory,
          author: {
            name: blogAuthorName,
            role: blogAuthorRole,
          },
          tags: blogTags ? blogTags.split(',').map(t => t.trim()).filter(Boolean) : [],
          isPublished: blogIsPublished,
          featured: blogFeatured,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setEditingId(null);
        setIsModalOpen(false);
        fetchData(token);
      } else {
        alert(data.error || 'Failed to save blog post');
      }
    } catch {
      alert('Error saving blog post');
    }
  };

  const createCareer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const url = editingId ? `/api/admin/careers/${editingId}` : '/api/admin/careers';
    const method = editingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ 
        title: jobTitle, 
        description: jobDesc, 
        category: jobCat, 
        location: jobLoc 
      })
    });
    if (res.ok) {
      setJobTitle('');
      setJobDesc('');
      setJobCat('');
      setJobLoc('');
      setEditingId(null);
      setIsModalOpen(false);
      fetchData(token);
    }
  };

  const deleteItem = async (type: string, id: string) => {
    if (!token) return;
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const endpoint = type === 'career' ? 'careers' : type === 'category' ? 'career-categories' : type === 'blog' ? 'blogs' : 'career-locations';
    const res = await fetch(`/api/admin/${endpoint}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) fetchData(token);
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        fetchData(token);
      } else {
        const errorData = await res.json();
        alert('Failed to update status: ' + (errorData.error || 'Unknown error'));
      }
    } catch {
      alert('Error updating status');
    }
  };

  const deleteApplication = async (id: string) => {
    if (!token) return;
    if (!confirm('Are you sure you want to delete this application?')) return;
    const res = await fetch(`/api/applications/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) fetchData(token);
  };

  if (!token) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const renderSidebar = () => (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col z-10">
      <div className="p-8 flex items-center gap-3">
        <img src="/Maskan Open File/PNG/Maskan-01.png" alt="Maskan Logo" className="h-24 scale-150 invert object-contain w-full object-left" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
        <h1 className="text-2xl font-bold text-[#245171] tracking-tight hidden">Maskan</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <button 
          onClick={() => setActiveTab('applications')} 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${activeTab === 'applications' ? 'bg-[#245171] text-white shadow-md shadow-[#245171]/20' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Applications</span>
          {applications.length > 0 && (
            <span className={`ml-auto py-0.5 px-2 rounded-full text-[10px] ${activeTab === 'applications' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#245171]'}`}>{applications.length}</span>
          )}
        </button>
        <button 
          onClick={() => setActiveTab('careers')} 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${activeTab === 'careers' ? 'bg-[#245171] text-white shadow-md shadow-[#245171]/20' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <Briefcase className="w-5 h-5" />
          <span>Careers</span>
        </button>
        <button 
          onClick={() => setActiveTab('categories')} 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${activeTab === 'categories' ? 'bg-[#245171] text-white shadow-md shadow-[#245171]/20' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <Tags className="w-5 h-5" />
          <span>Categories</span>
        </button>
        <button 
          onClick={() => setActiveTab('locations')} 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${activeTab === 'locations' ? 'bg-[#245171] text-white shadow-md shadow-[#245171]/20' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <MapPin className="w-5 h-5" />
          <span>Locations</span>
        </button>
        <button 
          onClick={() => setActiveTab('blogs')} 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${activeTab === 'blogs' ? 'bg-[#245171] text-white shadow-md shadow-[#245171]/20' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Blogs</span>
          {blogs.length > 0 && (
            <span className={`ml-auto py-0.5 px-2 rounded-full text-[10px] ${activeTab === 'blogs' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#245171]'}`}>{blogs.length}</span>
          )}
        </button>
      </nav>
    </aside>
  );

  const renderModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-xl font-bold mb-6 text-gray-800 capitalize">{editingId ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}</h2>
          
          {activeTab === 'categories' && (
            <form onSubmit={createCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input type="text" value={catName} onChange={e => setCatName(e.target.value)} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm" />
              </div>
              <button type="submit" className="w-full bg-[#245171] hover:bg-[#1C415B] text-white py-2 rounded-lg font-medium transition-colors text-sm">{editingId ? 'Update' : 'Save'} Category</button>
            </form>
          )}

          {activeTab === 'locations' && (
            <form onSubmit={createLocation} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location Name</label>
                <input type="text" placeholder="e.g. Dubai" value={locName} onChange={e => setLocName(e.target.value)} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm" />
              </div>
              <button type="submit" className="w-full bg-[#245171] hover:bg-[#1C415B] text-white py-2 rounded-lg font-medium transition-colors text-sm">{editingId ? 'Update' : 'Save'} Location</button>
            </form>
          )}

          {activeTab === 'careers' && (
            <form onSubmit={createCareer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm" />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={jobCat} onChange={e => setJobCat(e.target.value)} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm">
                    <option value="" disabled>Select...</option>
                    {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select value={jobLoc} onChange={e => setJobLoc(e.target.value)} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm">
                    <option value="" disabled>Select...</option>
                    {locations.map(l => <option key={l._id} value={l._id}>{l.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (HTML allowed)</label>
                <textarea value={jobDesc} onChange={e => setJobDesc(e.target.value)} required className="w-full border border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none h-96 resize-none text-sm" />
              </div>
              <button type="submit" className="w-full bg-[#245171] hover:bg-[#1C415B] text-white py-3 mt-4 rounded-lg font-medium transition-colors text-sm">{editingId ? 'Update' : 'Save'} Career</button>
            </form>
          )}

          {activeTab === 'blogs' && (
            <form onSubmit={createOrUpdateBlog} className="space-y-4 max-h-[80vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Article Title *</label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => {
                      setBlogTitle(e.target.value);
                      if (!editingId && !blogSlug) {
                        setBlogSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''));
                      }
                    }}
                    placeholder="e.g. Contemporary Kerala Architecture"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug (e.g. contemporary-kerala-architecture)</label>
                  <input
                    type="text"
                    value={blogSlug}
                    onChange={(e) => setBlogSlug(e.target.value)}
                    placeholder="auto-generated from title"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm font-mono text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    value={blogCategory}
                    onChange={(e) => setBlogCategory(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                  >
                    <option value="Architecture">Architecture</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="News">News</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author Name *</label>
                  <input
                    type="text"
                    value={blogAuthorName}
                    onChange={(e) => setBlogAuthorName(e.target.value)}
                    placeholder="Maskan Editorial Team"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author Role</label>
                  <input
                    type="text"
                    value={blogAuthorRole}
                    onChange={(e) => setBlogAuthorRole(e.target.value)}
                    placeholder="Principal Architect"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL *</label>
                <input
                  type="text"
                  value={blogCoverImage}
                  onChange={(e) => setBlogCoverImage(e.target.value)}
                  placeholder="/projects/meridian-gallery-1-3x2-v2.webp or https://..."
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brief Excerpt *</label>
                <textarea
                  value={blogExcerpt}
                  onChange={(e) => setBlogExcerpt(e.target.value)}
                  placeholder="A compelling 1-2 sentence summary of this article..."
                  required
                  rows={2}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Article Content (Markdown / paragraphs supported) *</label>
                <textarea
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  placeholder="Write article here. Use ### for subheadings, - for bullet lists, > for quotes..."
                  required
                  rows={10}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm font-mono leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={blogTags}
                    onChange={(e) => setBlogTags(e.target.value)}
                    placeholder="Architecture, Kerala, Luxury"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#245171] outline-none text-sm"
                  />
                </div>
                <div className="flex items-center gap-6 pt-6">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 font-medium">
                    <input
                      type="checkbox"
                      checked={blogIsPublished}
                      onChange={(e) => setBlogIsPublished(e.target.checked)}
                      className="w-4 h-4 rounded text-[#245171] focus:ring-[#245171]"
                    />
                    <span>Publish live on site</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 font-medium">
                    <input
                      type="checkbox"
                      checked={blogFeatured}
                      onChange={(e) => setBlogFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-[#245171] focus:ring-[#245171]"
                    />
                    <span>Featured Hero Story</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#245171] hover:bg-[#1C415B] text-white py-3 rounded-lg font-medium transition-colors text-sm shadow-md"
              >
                {editingId ? 'Update' : 'Publish'} Blog Article
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };

  const renderTableContent = () => {
    if (activeTab === 'applications') {
      const filteredApplications = applications.filter(app => {
        const matchSearch = app.name.toLowerCase().includes(appSearchQuery.toLowerCase()) || 
                            app.email.toLowerCase().includes(appSearchQuery.toLowerCase());
        const matchStatus = appStatusFilter === 'All' || app.status === appStatusFilter;
        return matchSearch && matchStatus;
      });

      return (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={appSearchQuery} 
              onChange={e => setAppSearchQuery(e.target.value)} 
              className="border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#245171] text-sm w-64"
            />
            <select 
              value={appStatusFilter} 
              onChange={e => setAppStatusFilter(e.target.value)} 
              className="border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#245171] text-sm"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Selected">Selected</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <table className="w-full text-left text-[13px] text-gray-600">
            <thead className="text-[13px] text-gray-800 bg-white border-b border-gray-100 font-medium">
              <tr>
                <th className="px-6 py-4 font-normal">Applicant Name</th>
                <th className="px-6 py-4 font-normal">Email / Phone</th>
                <th className="px-6 py-4 font-normal">Position</th>
                <th className="px-6 py-4 font-normal">Resume</th>
                <th className="px-6 py-4 font-normal">Date Applied</th>
                <th className="px-6 py-4 font-normal w-32">Status</th>
                <th className="px-6 py-4 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors bg-white">
                  <td className="px-6 py-4 text-gray-900">{app.name}</td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{app.email}</div>
                    <div className="text-gray-400 text-xs">{app.phone}</div>
                  </td>
                  <td className="px-6 py-4">{app.jobTitle}</td>
                  <td className="px-6 py-4">
                    {app.resumeName ? (
                      <a href={`/api/applications/${app._id}/resume`} target="_blank" rel="noopener noreferrer" className="text-[#245171] hover:text-[#183952] font-normal flex items-center gap-1 bg-[#F0F5F9] px-3 py-1.5 rounded w-fit">
                        <Eye className="w-3.5 h-3.5" /> View
                      </a>
                    ) : (
                      <span className="text-gray-400">No File</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <select 
                      value={app.status} 
                      onChange={e => updateApplicationStatus(app._id, e.target.value)}
                      className={`border px-2 py-1.5 rounded-lg text-[11px] font-medium outline-none focus:ring-2 focus:ring-[#245171] transition-colors w-full ${app.status === 'New' ? 'bg-[#E3F2FD] text-[#1976D2] border-[#BBDEFB]' : app.status === 'Shortlisted' ? 'bg-[#FFF3E0] text-[#F57C00] border-[#FFE0B2]' : app.status === 'Selected' ? 'bg-[#E8F5E9] text-[#388E3C] border-[#C8E6C9]' : 'bg-[#F5F5F5] text-[#757575] border-[#E0E0E0]'}`}
                    >
                      <option value="New">New</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Selected">Selected</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end">
                    <button onClick={() => deleteApplication(app._id)} className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredApplications.length === 0 && (
                <tr><td colSpan={7} className="px-6 py-8 text-center text-gray-400">No applications found matching your criteria.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === 'careers') {
      return (
        <table className="w-full text-left text-[13px] text-gray-600">
          <thead className="text-[13px] text-gray-800 bg-white border-b border-gray-100 font-medium">
            <tr>
              <th className="px-6 py-4 font-normal">Job Title</th>
              <th className="px-6 py-4 font-normal">Category</th>
              <th className="px-6 py-4 font-normal">Location</th>
              <th className="px-6 py-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr key={career._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors bg-white">
                <td className="px-6 py-4 text-gray-900">{career.title}</td>
                <td className="px-6 py-4">{career.category?.name || '-'}</td>
                <td className="px-6 py-4">{career.location?.name || '-'}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button onClick={() => openEditModal('career', career)} className="bg-gray-800 text-white hover:bg-gray-900 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Eye className="w-3 h-3" /> View
                  </button>
                  <button onClick={() => deleteItem('career', career._id)} className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
            {careers.length === 0 && <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">No careers found.</td></tr>}
          </tbody>
        </table>
      );
    }

    if (activeTab === 'categories') {
      return (
        <table className="w-full text-left text-[13px] text-gray-600">
          <thead className="text-[13px] text-gray-800 bg-white border-b border-gray-100 font-medium">
            <tr>
              <th className="px-6 py-4 font-normal">Category Name</th>
              <th className="px-6 py-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors bg-white">
                <td className="px-6 py-4 text-gray-900">{cat.name}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button onClick={() => openEditModal('category', cat)} className="bg-gray-800 text-white hover:bg-gray-900 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Eye className="w-3 h-3" /> View
                  </button>
                  <button onClick={() => deleteItem('category', cat._id)} className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && <tr><td colSpan={2} className="px-6 py-8 text-center text-gray-400">No categories found.</td></tr>}
          </tbody>
        </table>
      );
    }

    if (activeTab === 'locations') {
      return (
        <table className="w-full text-left text-[13px] text-gray-600">
          <thead className="text-[13px] text-gray-800 bg-white border-b border-gray-100 font-medium">
            <tr>
              <th className="px-6 py-4 font-normal">Location Name</th>
              <th className="px-6 py-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors bg-white">
                <td className="px-6 py-4 text-gray-900">{loc.name}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button onClick={() => openEditModal('location', loc)} className="bg-gray-800 text-white hover:bg-gray-900 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Eye className="w-3 h-3" /> View
                  </button>
                  <button onClick={() => deleteItem('location', loc._id)} className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
            {locations.length === 0 && <tr><td colSpan={2} className="px-6 py-8 text-center text-gray-400">No locations found.</td></tr>}
          </tbody>
        </table>
      );
    }

    if (activeTab === 'blogs') {
      return (
        <table className="w-full text-left text-[13px] text-gray-600">
          <thead className="text-[13px] text-gray-800 bg-white border-b border-gray-100 font-medium">
            <tr>
              <th className="px-6 py-4 font-normal">Article</th>
              <th className="px-6 py-4 font-normal">Category</th>
              <th className="px-6 py-4 font-normal">Author</th>
              <th className="px-6 py-4 font-normal">Status</th>
              <th className="px-6 py-4 font-normal">Date</th>
              <th className="px-6 py-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors bg-white">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-9 rounded bg-gray-100 overflow-hidden relative shrink-0">
                      <img src={b.coverImage} alt={b.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 line-clamp-1 block max-w-xs">{b.title}</span>
                      <span className="text-gray-400 text-xs font-mono">/blog/{b.slug}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                    {b.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900">{b.author?.name || 'Maskan Team'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                    b.isPublished ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {b.isPublished ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">{new Date(b.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2 items-center">
                  <a
                    href={`/blog/${b.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#245171] hover:bg-gray-50 rounded transition-colors"
                    title="Preview on live site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => openEditModal('blog', b)}
                    className="bg-gray-800 text-white hover:bg-gray-900 px-3 py-1.5 rounded flex items-center gap-1 text-xs transition-colors"
                  >
                    <Eye className="w-3 h-3" /> Edit
                  </button>
                  <button
                    onClick={() => deleteItem('blog', b._id)}
                    className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded flex items-center gap-1 text-xs transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                  <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p>No blog posts created yet. Click &quot;Add Blog&quot; above to create your first article.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex">
      {renderSidebar()}
      
      <main className="flex-1 ml-64 flex flex-col h-screen">
        <header className="h-20 bg-white flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 capitalize flex items-center gap-3">
              {activeTab}
              <span className="text-xs px-3 py-1 bg-gray-100 rounded-full font-normal border border-gray-200">
                {activeTab === 'applications' ? applications.length : activeTab === 'careers' ? careers.length : activeTab === 'categories' ? categories.length : activeTab === 'blogs' ? blogs.length : locations.length}
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-6">
            {activeTab !== 'applications' && (
              <button 
                onClick={openAddModal}
                className="bg-[#245171] hover:bg-[#1C415B] shadow-md shadow-[#245171]/20 text-white px-5 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add {activeTab === 'blogs' ? 'Blog' : activeTab.slice(0, -1)}
              </button>
            )}
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <span className="font-medium text-sm">AU</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Admin User</span>
                <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-gray-600 text-left transition-colors">Super admin / Logout</button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 bg-[#F8F9FB] overflow-y-auto">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              {renderTableContent()}
            </div>
          </div>
        </div>
      </main>

      {renderModal()}
    </div>
  );
}
