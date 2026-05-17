import React, { useState } from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { blogPosts } from '../data/blog-posts';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const openPost = (postId: number) => {
    setSelectedPost(postId);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  return (
    <>
      <SEO
        title="Блог Prefab Homes"
        description="Статті про модульні будинки, SIP, енергоефективність та розумні технології. Експертні матеріали Prefab Homes Україна."
        url="/blog"
        keywords={buildKeywords('блог модульні будинки Україна, SIP статті, prefab поради, енергоефективне житло')}
      />
      <div className="bg-white">
      <div>
        {/* Hero Section */}
      <section 
        className="py-32 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="absolute inset-0">
          <img
            src="/SKANDY/SKANDY 120_ 1. 4K Large.jpeg"
            alt="Модульні будинки Prefab Homes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="w-full px-4 sm:px-5 relative z-10">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ІНСАЙТИ ТА ЕКСПЕРТИЗА</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Блог Prefab Homes
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-body font-normal">
              Новини галузі, тренди та практичні поради щодо модульного будівництва, енергоефективності й сучасного житла.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`group cursor-pointer transition-all duration-500 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => openPost(post.id)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden md:hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-80 lg:h-96' : 'h-64'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 md:group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white py-2 px-4 text-sm font-medium rounded-lg">
                      {post.category}
                    </div>
                    
                    {/* Read More Overlay - visible on mobile for last card (no hover), hover on desktop */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        index === blogPosts.length - 1
                          ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
                          : 'opacity-0 md:group-hover:opacity-100'
                      }`}
                    >
                      <div className="bg-primary text-white py-3 px-6 rounded-lg font-medium">
                        Читати повністю
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className={`font-semibold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300 ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h2>
                    
                    <p className={`text-gray-600 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-6 flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-300">
                      <span>Читати далі</span>
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Post Modal */}
      {selectedPostData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-h-full overflow-y-auto rounded-lg">
            {/* Header */}
            <div className="relative">
              <img 
                src={selectedPostData.image} 
                alt={selectedPostData.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <button
                onClick={closePost}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 bg-primary text-white py-2 px-4 text-sm font-medium rounded-lg">
                {selectedPostData.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>{selectedPostData.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedPostData.readTime}</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-heading font-light text-gray-800 mb-8 leading-tight">
                {selectedPostData.title}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                {selectedPostData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-heading font-semibold text-gray-800 mt-8 mb-4">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  const paragraphs = selectedPostData.content.split('\n\n');
                  const showInlineImage = selectedPostData.contentImage && index === Math.max(2, Math.floor(paragraphs.length / 2) - 1);
                  return (
                    <React.Fragment key={index}>
                      <p className="text-gray-700 leading-relaxed mb-6 font-body font-normal">
                        {paragraph}
                      </p>
                      {showInlineImage && selectedPostData.contentImage && (
                        <figure className="my-10 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={selectedPostData.contentImage}
                            alt=""
                            className="w-full h-auto object-cover"
                          />
                          <figcaption className="text-sm text-gray-500 mt-2 text-center font-body">
                            Модульний будинок — Prefab Homes
                          </figcaption>
                        </figure>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Close */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center items-center">
                <InteractiveHoverButton
                  text="Закрити статтю"
                  onClick={closePost}
                  className="bg-primary text-white px-6 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default BlogPage;