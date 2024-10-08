"use client";
import Link from "next/link";
import { ArrowRight, FileText, Github, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DefixGuardWebsite() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./defixguard-draft.pdf";
    link.download = "./defixguard-draft.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            DefixGuard
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#paper"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Paper
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            LLM-Driven Smart Contract Auditing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Enhancing security and reliability in the DeFi ecosystem
          </p>
          <Button size="lg" onClick={handleDownload}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            About DefixGuard
          </h3>
          <p className="text-gray-600 mb-4">
            DefixGuard is a novel framework that enhances the process of smart
            contract auditing by integrating state-of-the-art Large Language
            Models (LLMs) with static analysis tools. It offers an extendable
            framework with improved accuracy and reliability in vulnerability
            detection.
          </p>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Multi-LLM Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utilizes a weighted majority consensus algorithm to improve
                  detection accuracy and minimize false positives.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Synergistic Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Combines static tools and LLMs to ensure comprehensive
                  coverage of vulnerabilities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Detailed Audit Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generates rich, multi-layered analysis with actionable
                  remediation steps.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed for efficient auditing of multiple smart contracts
                  simultaneously.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="paper" className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Research Paper
          </h3>
          <p className="text-gray-600 mb-4">
            For a comprehensive understanding of DefixGuard's methodology,
            performance, and implications for the DeFi ecosystem, please refer
            to our research paper.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={handleDownload}>
              <FileText className="mr-2 h-4 w-4" />
              Read Paper
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/saineshnakra/DefixGuard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sainesh Nakra All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
