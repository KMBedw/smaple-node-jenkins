pipeline {
    agent {
        docker {
            // image 'node:18'
            image 'node:22.11.0-alpine3.20'
        }

    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Test') {
            steps {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
    }
}
