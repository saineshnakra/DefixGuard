# DefixGuard

Smart contracts form the backbone of Decentralized Finance (DeFi) platforms, but they are highly vulnerable to exploits. Current automated tools for smart contract auditing often fail to detect complex vulnerabilities or generate a high number of false positives. To address these challenges, we present DefixGuard, a scalable and automated framework for smart contract auditing that leverages the strengths of Large Language Models (LLMs) and static analysis tools. By integrating a multi-LLM architecture and a weighted consensus algorithm, DefixGuard significantly enhances the accuracy of vulnerability detection while automating the auditing process. Our framework goes beyond traditional auditing by automating the generation of detailed, multilayered audit reports. These reports not only identify vulnerabilities but also include actionable remediation steps, offering comprehensive security assessments, risk evaluations, and clear recommendations for developers to address the issues. Evaluation of DefixGuard on real-world DeFi smart contracts show a precision of 94%, outperforming existing tools like Slither and Mythril. Despite its strengths, challenges remain in addressing certain attack vectors such as oracle manipulations. Future work will focus on refining detection models and improving coverage, making DefixGuard a promising solution for large-scale, automated smart contract auditing in the DeFi ecosystem.
