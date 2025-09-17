// components/features/Features.tsx
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Cpu,
  GitBranch,
  Database,
  Cloud,
  LineChart,
  Terminal,
  Shield,
  Gauge,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Features() {
  const router = useRouter();

  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Automation',
      description:
        'Smart deployment pipelines that learn and optimize from your workflow patterns.',
      badge: 'Automation',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Advanced Git integration with automated branch management and merge policies.',
      badge: 'DevOps',
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Automated schema changes with rollback capabilities and data integrity checks.',
      badge: 'Database',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Deploy',
      description: 'Deploy to any cloud provider with unified configuration and management.',
      badge: 'Cloud',
    },
    {
      icon: LineChart,
      title: 'Performance Metrics',
      description: 'Real-time monitoring of application performance and resource utilization.',
      badge: 'Analytics',
    },
    {
      icon: Terminal,
      title: 'CLI Tools',
      description: 'Powerful command-line interface for streamlined development workflows.',
      badge: 'Tools',
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Automated vulnerability assessment and dependency scanning.',
      badge: 'Security',
    },
    {
      icon: Gauge,
      title: 'Load Testing',
      description: 'Automated performance testing with detailed analytics and reporting.',
      badge: 'Testing',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Role-based access control with audit logs and compliance reporting.',
      badge: 'Security',
    },
  ];

  const handleTrial = () => {
    router.push('/trial');
  };

  const handleDemo = () => {
    router.push('/demo');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DevOps Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Advanced tools and automation to help development teams build, test, and deploy with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your development workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground" onClick={handleTrial}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={handleDemo}>
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
