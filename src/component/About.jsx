import React from 'react';

export const About = () => {
  const teamMembers = [
    {
      name: 'Mrs . Sanjanaa V',
      role: 'Tech Lead',
      bio: 'Visionary developer and neuro-inclusion advocate dedicated to building accessible, high-impact technology for the next generation',
      image: '👩‍⚕️',
      color: 'from-purple-400 to-purple-500'
    },
    {
      name: 'Mr . Karthick S',
      role: 'Frontend Developer',
      bio: 'Innovative frontend developer crafting accessible, sensory-friendly interfaces that empower every child’s digital journey.',
      image: '🧑‍🚀',
      color: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Mr . Raghul Krishnan K',
      role: 'Team Co-ordinator',
      bio: 'Empathetic community leader building inclusive, supportive networks where every voice is heard and celebrated.',
      image: '👩‍🏫',
      color: 'from-green-400 to-green-500'
    },
    {
      name: 'Mrs . Rifaath Fathimah S',
      role: 'Community Lead',
      bio: 'Strategic coordinator harmonizing team efforts to deliver impactful, neuro-inclusive solutions through seamless collaboration.',
      image: '👨‍💻',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  const values = [
    {
      icon: '🌿',
      title: 'Neurodiversity-Affirming',
      description: 'We celebrate different ways of thinking, learning, and experiencing the world.'
    },
    {
      icon: '🕊️',
      title: 'Trauma-Informed',
      description: 'Every resource is designed with sensitivity to past experiences and triggers.'
    },
    {
      icon: '🤝',
      title: 'Community-Led',
      description: 'Our autistic community guides everything we create and share.'
    },
    {
      icon: '🔍',
      title: 'Evidence-Based',
      description: 'We collaborate with researchers to ensure our tools are effective and safe.'
    },
    {
      icon: '🌈',
      title: 'Intersectional',
      description: 'We recognize and celebrate all identities within the autism community.'
    },
    {
      icon: '🌱',
      title: 'Growth-Oriented',
      description: 'Focus on wellbeing and self-understanding, not "fixing" or changing who you are.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Aura founded by Dr. Sarah Chen', icon: '✨' },
    { year: '2021', event: 'Launched first sensory-friendly tools', icon: '🌈' },
    { year: '2022', event: 'Community grew to 10,000+ members', icon: '🌻' },
    { year: '2023', event: 'Partnered with autism research centers', icon: '🤝' },
    { year: '2024', event: 'Expanded resources to 15+ languages', icon: '🌍' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aura
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to create a world where autistic individuals can thrive authentically, 
            with tools and community designed for neurodiversity.
          </p>
        </div>

        {/* Mission statement - featured */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl transform rotate-1 opacity-30"></div>
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl mb-4 inline-block">💜</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide calm, accessible, and affirming resources that empower autistic individuals 
                to understand themselves better, connect with others, and navigate the world in their own way. 
                We believe in celebrating neurodiversity, not masking it.
              </p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      Our Values
    </span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* 1 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧠</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Neuro-Diversity First</h4>
      <p className="text-sm text-gray-600">
        We celebrate the unique way every brain is wired. We don't aim for "normal"; we aim for a world where every child's natural way of thinking is a superpower.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🌿</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Sensory-First Design</h4>
      <p className="text-sm text-gray-600">
        We believe the digital world should be a sanctuary, not a stressor. Our platform prioritizes low-stimulation visuals and customizable environments to prevent sensory overload.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✨</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Strengths-Based Growth</h4>
      <p className="text-sm text-gray-600">
        Every child has a "spark." We focus on what a child can do — their intense interests, pattern recognition, and creativity — rather than just tracking deficits.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">♿</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Radical Accessibility</h4>
      <p className="text-sm text-gray-600">
        Accessibility isn't a feature for us; it's the foundation. From simple navigation to symbol-supported text, we ensure communication has no barriers.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🛡️</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Predictable & Safe</h4>
      <p className="text-sm text-gray-600">
        Consistency is key. We provide a structured digital environment with clear transitions and no hidden surprises, giving children the confidence to explore without anxiety.
      </p>
    </div>

    {/* 6 */}
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🤝</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Inclusive Empowerment</h4>
      <p className="text-sm text-gray-600">
        We don't just build for the community; we build with them. Our tools are designed to give every child a voice and the agency to navigate their world independently.
      </p>
    </div>

  </div>
</div>

        {/* Team section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Meet the Team
            </span>
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team includes autistic individuals, clinicians, educators, and advocates working together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {member.image}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Impact stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">50K+</div>
              <p className="text-sm text-gray-600">Community Members</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">100+</div>
              <p className="text-sm text-gray-600">Resources</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">15</div>
              <p className="text-sm text-gray-600">Languages</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-sm text-gray-600">Support Available</p>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-gray-500 text-center mb-6">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-gray-400 font-semibold text-lg">Autism Society</span>
            <span className="text-gray-400 font-semibold text-lg">NHS</span>
            <span className="text-gray-400 font-semibold text-lg">CDC</span>
            <span className="text-gray-400 font-semibold text-lg">Autism Speaks</span>
            <span className="text-gray-400 font-semibold text-lg">Harvard Health</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="relative">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative px-8 py-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Whether you're autistic, an ally, or a professional — there's a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Sign Up Free
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            This page is designed with accessibility in mind — high contrast, readable fonts, and screen-reader friendly.
          </p>
        </div>
      </div>
    </section>
  );
};