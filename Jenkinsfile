pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm test'
            }
        }

        stage('Package') {
            steps {
                sh 'mkdir -p dist && npm pack --pack-destination dist'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/*.tgz', fingerprint: true
            }
        }
    }
}
