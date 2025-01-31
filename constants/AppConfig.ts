/*
    AppConfig.ts

    - Constants of interest for Shail

*/

export default {
    AppName: "Shail",
    AppScheme: "shail",
    models: {
        deepseek: [
            { key: "deepseek-chat", title: "Chat with DeepSeek", icon: "bolt",
                completionUri: "https://api.deepseek.com/beta/chat/completions",                
             },
            { key: "deepseek-reasoner", title: "Reasoner with DeepSeek", icon: "sparkles",
                completionUri: "https://api.deepseek.com/beta/chat/completions",
             },
            { key: "shail1", title: "Chat with Shail", icon: "fish", 
                completionUri: "http://localhost:8090/v1/chat/completions", },
        ]
    }
};
