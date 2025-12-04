import React, { useState } from 'react';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Real-Life Benefits of an Energy-Efficient Home",
      excerpt: "Energy efficiency has become more than a buzzword in modern construction—it's a necessity. Discover the real benefits beyond just saving money.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Energy Efficiency",
      image: "/Skandy 120 front-1 2.png",
      content: `Energy efficiency has become more than a buzzword in modern construction—it's a necessity. As energy prices continue to rise and environmental concerns grow, homeowners are looking for better ways to build. But what exactly makes an energy-efficient home different? And why are so many people choosing this route?

In my years working with prefab homes, I've seen firsthand how much of a difference energy efficiency makes—not just in terms of money saved, but in quality of life. The concept goes beyond insulation and smart meters. It's a combination of thoughtful design, high-performance materials, and a long-term view on comfort and sustainability.

Let's start with the basics: an energy-efficient home is designed to use as little energy as possible for heating, cooling, and daily operations. This usually begins with the building envelope—the walls, floors, roof, windows, and doors. Using advanced materials like Structural Insulated Panels (SIPs), builders can create airtight, well-insulated structures that minimize heat loss in winter and keep the interior cool in summer.

But the benefits don't stop at lower utility bills. A tightly sealed and well-ventilated home means fewer drafts, less moisture buildup, and improved air quality. Families often notice that their energy-efficient homes are quieter, too—outside noise is significantly reduced thanks to thicker, more insulated walls.

There's also a financial upside. While building an energy-efficient home may have slightly higher upfront costs due to specialized materials and systems, the investment pays off over time. Owners report significantly lower energy bills, fewer repairs due to moisture or mold issues, and higher resale value when it's time to move.

In countries with cold winters and hot summers—like here in Eastern Europe—having a home that naturally maintains a stable indoor climate makes a world of difference. You're not just reducing your carbon footprint; you're improving your daily living experience.

Energy efficiency is no longer a luxury—it's becoming the standard. And with today's prefab technologies, it's easier and more accessible than ever.`
    },
    {
      id: 2,
      title: "SIP Technology: The Future of Efficient, Strong, and Fast Building",
      excerpt: "Discover how Structural Insulated Panels are revolutionizing construction with superior strength, efficiency, and speed.",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/2p.jpg",
      content: `When I first encountered SIP construction, I was skeptical. Coming from a background in traditional wood-frame building, I didn't understand how something as simple as a panel could replace so many structural elements. But after just a few projects, I was convinced. SIPs are one of the most efficient and innovative technologies to enter the construction world in the past few decades.

SIP stands for Structural Insulated Panel. At first glance, it looks like a thick, solid board. But it's much more than that. Each SIP is made of an insulating foam core sandwiched between two rigid boards, usually oriented strand board (OSB). This simple configuration creates a panel that is both lightweight and incredibly strong.

One of the most impressive things about SIPs is how quickly a structure can be assembled. A building that would take months with traditional methods can be raised in just a few weeks—or even days—when using SIP panels. Because they're manufactured in a factory under controlled conditions, there's minimal on-site adjustment required. Everything fits together with surprising precision, which helps avoid delays and mistakes.

What really sets SIPs apart, however, is their performance. The insulation value is much higher than conventional wall systems. This means lower heating and cooling requirements, fewer drafts, and a more comfortable indoor environment year-round. I've seen homeowners report 50% or more savings on their energy bills compared to similar-sized homes built with traditional materials.

Durability is another benefit. Despite their light weight, SIPs are incredibly strong and resilient. Many SIP homes have performed well in extreme weather conditions—something increasingly important as we face more climate-related events. Whether it's high winds, heavy snow, or moisture, SIPs offer solid resistance and long-term stability.

From a design perspective, SIPs offer flexibility as well. They can be used in small cabins, large homes, and even commercial buildings. Architects love them for their clean lines and minimalist potential, while builders appreciate the speed and efficiency.

In short, SIP technology is not just a passing trend. It's a smart response to modern construction challenges, and it's redefining the way we think about building.`
    },
    {
      id: 3,
      title: "SIP Construction Methods: Exploring the Different Ways to Build Smarter",
      excerpt: "Learn about the various SIP construction approaches and find the method that best suits your project goals and timeline.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Construction",
      image: "/render1.jpg",
      content: `If you've decided to build with SIPs, you've already made a great choice. But what many people don't realize is that there are several different ways to approach SIP construction, depending on your goals, timeline, and budget. Over the years, I've worked on a variety of SIP projects, and each one followed a slightly different path—even though they all started with the same core technology.

The first and most straightforward method is using SIP kits. These are pre-manufactured panel sets that are delivered to your building site ready to assemble. It's a great option for people who want to manage part of the process themselves or work with a smaller crew. Everything comes labeled and pre-cut, and it's almost like assembling a life-sized puzzle. While it still requires construction knowledge, it significantly reduces the time and effort needed compared to building from raw materials.

Another popular approach is the hybrid system. Here, the main structural elements—typically the walls and roof—are made from SIPs, while other parts of the building use more conventional techniques. This can be a good compromise if you're working with a particular design or need to manage costs. For example, combining SIP walls with a traditional truss roof can save money while still delivering energy performance where it matters most.

Finally, there's the full-service or turnkey SIP build. This is what many prefab companies (including ours) specialize in. It means we take care of everything—from design and panel manufacturing to on-site construction and finishing work. It's the fastest and most stress-free way to build with SIPs, especially for clients who want reliability and a clear project timeline. In most cases, a fully built SIP home can be completed in a fraction of the time it would take using other methods.

Choosing the right method depends on your level of involvement, budget, and desired timeline. But whichever route you choose, the advantages remain the same: strong, energy-efficient construction that will last for decades.

SIP building is not only about how the panels are made—it's about how you use them. And in the right hands, SIPs open the door to faster, greener, smarter homes that are ready for the future.`
    },
    {
      id: 4,
      title: "Modular vs Traditional Construction: A Complete Comparison",
      excerpt: "Exploring the key differences between modular and traditional construction methods, from cost to quality to timeline.",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Construction",
      image: "/Глеваха_1.jpg",
      content: `When considering a new home, one of the biggest decisions you'll face is choosing between modular and traditional construction. Both methods have their advantages, but understanding the differences can help you make the best choice for your situation.

**Construction Timeline**
Perhaps the most significant advantage of modular construction is speed. While traditional homes can take 6-12 months to complete, modular homes are typically finished in 3-4 months. This is because much of the construction happens simultaneously—while your foundation is being prepared, your home is being built in the factory.

**Quality Control**
Factory construction offers superior quality control. In our controlled environment, materials are protected from weather, and each component is built to exact specifications. Traditional construction, while offering more customization during the build, is subject to weather delays and on-site variables that can affect quality.

**Cost Considerations**
Modular construction often provides better cost predictability. Factory efficiency and bulk purchasing power typically result in 10-20% cost savings compared to traditional construction. However, traditional construction may offer more flexibility in material choices and design changes during the build process.

**Design Flexibility**
While traditional construction offers unlimited customization, modern modular construction has come a long way. Today's modular homes can be highly customized, with options for unique layouts, premium finishes, and architectural details that rival traditional construction.

**Environmental Impact**
Modular construction is inherently more sustainable. Factory construction produces less waste, uses materials more efficiently, and the controlled environment allows for better insulation and air sealing, resulting in more energy-efficient homes.

The choice between modular and traditional construction ultimately depends on your priorities: speed, cost predictability, and environmental considerations favor modular, while unlimited customization and traditional building methods favor conventional construction.`
    },
    {
      id: 5,
      title: "Smart Home Technology: The Future of Prefab Living",
      excerpt: "How integrated smart home systems are revolutionizing the prefab industry and creating homes that adapt to your lifestyle.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/S-18-1.jpg",
      content: `The integration of smart home technology in prefab construction represents a perfect marriage of efficiency and innovation. As homes become more connected, prefab construction offers unique advantages for implementing comprehensive smart home systems.

**Factory Integration Advantages**
Installing smart home systems during factory construction ensures perfect integration. Wiring, sensors, and control systems can be installed with precision that's difficult to achieve in traditional on-site construction. This results in cleaner installations, better performance, and fewer issues down the road.

**Energy Management**
Smart homes excel at energy management, automatically adjusting heating, cooling, and lighting based on occupancy and preferences. When combined with the superior insulation and air sealing of modern prefab homes, these systems can reduce energy consumption by up to 30%.

**Security and Monitoring**
Integrated security systems provide comprehensive monitoring and control. From smart locks and cameras to environmental sensors that detect water leaks or air quality issues, these systems provide peace of mind and can prevent costly damage.

**Convenience and Comfort**
Voice control, automated lighting, and climate systems that learn your preferences create a living experience that adapts to your lifestyle. Imagine arriving home to find your house at the perfect temperature, with lights adjusted to your preferred settings.

**Future-Proofing**
Smart home systems are designed to evolve. Regular software updates add new features and capabilities, ensuring your home stays current with the latest technology without requiring hardware changes.

**Return on Investment**
While smart home systems require an initial investment, they typically pay for themselves through energy savings, increased home value, and reduced insurance costs. Many insurance companies offer discounts for homes with integrated security and monitoring systems.

The future of prefab living is smart, connected, and responsive to our needs. As technology continues to advance, these integrated systems will become even more sophisticated, making our homes not just places to live, but intelligent partners in our daily lives.`
    }
  ];

  const openPost = (postId: number) => {
    setSelectedPost(postId);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">INSIGHTS & EXPERTISE</div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Prefab Homes Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-body font-normal">
              Discover the latest insights, trends, and expert advice in prefab construction, 
              energy efficiency, and modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`group cursor-pointer transition-all duration-500 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => openPost(post.id)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-80 lg:h-96' : 'h-64'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white py-2 px-4 text-sm font-medium rounded-sm">
                      {post.category}
                    </div>
                    
                    {/* Read More Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-primary text-white py-3 px-6 rounded-sm font-medium">
                        Read Full Article
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
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-12 rounded-lg text-center">
            <h3 className="text-3xl font-light text-white mb-4">Stay Updated</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on prefab construction, energy efficiency, and modern living 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Post Modal */}
      {selectedPostData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-4xl w-full max-h-full overflow-y-auto rounded-lg">
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
              <div className="absolute bottom-4 left-4 bg-primary text-white py-2 px-4 text-sm font-medium rounded-sm">
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
              
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-8 leading-tight">
                {selectedPostData.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {selectedPostData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-heading font-semibold text-gray-800 mt-8 mb-4">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 font-body font-normal">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share & Close */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <span className="text-gray-600">Share this article:</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-sm transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-sm transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <button 
                  onClick={closePost}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-sm font-medium transition-colors duration-200"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;