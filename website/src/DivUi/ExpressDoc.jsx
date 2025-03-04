import React from 'react'
import Preview from '../Components/Preview'
import folderImg from '/ExpressPreview.png'
import AdminImg from '/Admin.png'
const Component = {
    name: 'Express Starter',
    code: `npx trydivjs add express`,
    docs: `
## Express Starter

Express Starter is a production-ready backend template with built-in authentication and MongoDB integration.

- **To generate the code automatically run command:- **
\`\`\`sh
npx trydivjs add express
\`\`\`

\n
---

## **Key Features**

| Feature                | Description |
| ---------------------- | ----------- |
| **1. Authentication**  | Pre-built routes for login, registration, and logout |
| **2. Admin Dashboard** | Ready-to-use admin interface with user management |
| **3. MongoDB Setup**   | Pre-configured MongoDB connection with models |
| **4. Folder Structure**| Organized architecture following best practices |
| **5. Security**        | Built-in session management and middleware |

---



---`
}

function ExpressDoc() {
    return (
        <div className="flex flex-col sm:flex-row w-full min-h-screen sm:p-2 space-y-6 sm:space-y-0">
            <Preview name={Component.name} code={Component.code} docs={Component.docs}>
                <div className="space-y-6 p-4">
                    <div className='flex gap-5 justify-center '>
                        <img
                            src={folderImg}
                            alt="Express Backend Setup"
                            className="rounded-lg border shadow-sm w-[20%]"
                        />
                        <img src={AdminImg} alt="" className='w-[70%] rounded-lg border shadow-sm border-gray-300'/>

                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Production-Ready Express Backend
                    </h2>

                    <p className="text-base text-gray-700 leading-relaxed">
                        Jumpstart your Node.js backend development with a pre-configured Express.js
                        template that includes essential authentication flows and database integration.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">
                            Key Features
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                            <li><strong>Auth System:</strong> Ready-to-use routes for user registration, login, and logout</li>
                            <li><strong>Admin Dashboard:</strong> Pre-built admin panel using Admin.js with MongoDB integration</li>
                            <li><strong>Structured Architecture:</strong> Organized directory structure following best practices</li>
                            <li><strong>Security:</strong> Built-in session management and authentication middleware</li>
                            <li><strong>Scalability:</strong> Easy-to-extend codebase with modular route handling</li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-600 italic mt-4">
                        Simply generate and start building your application logic -
                        all the boilerplate is already configured!
                    </p>
                </div>
            </Preview>
        </div>
    )
}

export default ExpressDoc