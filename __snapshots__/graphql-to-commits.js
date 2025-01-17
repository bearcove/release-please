exports['graphqlToCommits converts raw graphql response into Commits object for php 1'] = {
  "endCursor": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42 31",
  "hasNextPage": true,
  "commits": [
    {
      "sha": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42",
      "message": "fix: Update PubSub timeouts. (#1967)",
      "files": [
        "PubSub/src/V1/resources/subscriber_client_config.json",
        "PubSub/synth.metadata"
      ]
    },
    {
      "sha": "269cf923ea6fd0375abaf0bb19790475693c6f90",
      "message": "fix: Assorted minor fixes for Cloud Datastore client (#1964)",
      "files": [
        "Datastore/src/Connection/Grpc.php",
        "Datastore/src/DatastoreClient.php",
        "Datastore/src/Entity.php",
        "Datastore/src/EntityIterator.php",
        "Datastore/src/EntityMapper.php",
        "Datastore/src/Key.php",
        "Datastore/src/Operation.php",
        "Datastore/src/TransactionTrait.php"
      ]
    },
    {
      "sha": "da356f004ff891e11a369fd634f55d6abade708f",
      "message": "Prepare v0.102.0 (#1965)",
      "files": [
        "AutoMl/VERSION",
        "Debugger/VERSION",
        "Debugger/src/DebuggerClient.php",
        "Dialogflow/VERSION",
        "Firestore/VERSION",
        "Firestore/src/FirestoreClient.php",
        "Language/VERSION",
        "Language/src/LanguageClient.php",
        "Speech/VERSION",
        "Speech/src/SpeechClient.php",
        "Tasks/VERSION",
        "Vision/VERSION",
        "Vision/src/VisionClient.php",
        "WebSecurityScanner/VERSION",
        "composer.json",
        "docs/manifest.json",
        "src/ServiceBuilder.php",
        "src/Version.php"
      ]
    },
    {
      "sha": "fa5761e9e52f36506a72a9292843259d198468b0",
      "message": "feat: Add Web Security Center Client (#1961)\n\n* add synth script\r\n\r\n* generate web security scanner\r\n\r\n* add to docs site\r\n\r\n* update README\r\n\r\n* update composer\r\n\r\n* remove whitespace in sample\r\n\r\n* add phpunit config\r\n\r\n* add hyperlink\r\n\r\n* autoload tests\r\n\r\n* more autoload fixes",
      "files": [
        "README.md",
        "WebSecurityScanner/.gitattributes",
        "WebSecurityScanner/.github/pull_request_template.md",
        "WebSecurityScanner/CONTRIBUTING.md",
        "WebSecurityScanner/LICENSE",
        "WebSecurityScanner/README.md",
        "WebSecurityScanner/composer.json",
        "WebSecurityScanner/metadata/V1Beta/CrawledUrl.php",
        "WebSecurityScanner/metadata/V1Beta/Finding.php",
        "WebSecurityScanner/metadata/V1Beta/FindingAddon.php",
        "WebSecurityScanner/metadata/V1Beta/FindingTypeStats.php",
        "WebSecurityScanner/metadata/V1Beta/ScanConfig.php",
        "WebSecurityScanner/metadata/V1Beta/ScanConfigError.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRun.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRunErrorTrace.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRunWarningTrace.php",
        "WebSecurityScanner/metadata/V1Beta/WebSecurityScanner.php",
        "WebSecurityScanner/phpunit.xml.dist",
        "WebSecurityScanner/src/V1beta/CrawledUrl.php",
        "WebSecurityScanner/src/V1beta/CreateScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/DeleteScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/Finding.php",
        "WebSecurityScanner/src/V1beta/FindingTypeStats.php",
        "WebSecurityScanner/src/V1beta/Form.php",
        "WebSecurityScanner/src/V1beta/Gapic/WebSecurityScannerGapicClient.php",
        "WebSecurityScanner/src/V1beta/GetFindingRequest.php",
        "WebSecurityScanner/src/V1beta/GetScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/GetScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/ListCrawledUrlsRequest.php",
        "WebSecurityScanner/src/V1beta/ListCrawledUrlsResponse.php",
        "WebSecurityScanner/src/V1beta/ListFindingTypeStatsRequest.php",
        "WebSecurityScanner/src/V1beta/ListFindingTypeStatsResponse.php",
        "WebSecurityScanner/src/V1beta/ListFindingsRequest.php",
        "WebSecurityScanner/src/V1beta/ListFindingsResponse.php",
        "WebSecurityScanner/src/V1beta/ListScanConfigsRequest.php",
        "WebSecurityScanner/src/V1beta/ListScanConfigsResponse.php",
        "WebSecurityScanner/src/V1beta/ListScanRunsRequest.php",
        "WebSecurityScanner/src/V1beta/ListScanRunsResponse.php",
        "WebSecurityScanner/src/V1beta/OutdatedLibrary.php",
        "WebSecurityScanner/src/V1beta/README.md",
        "WebSecurityScanner/src/V1beta/ScanConfig.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/CustomAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/GoogleAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/ExportToSecurityCommandCenter.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/RiskLevel.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Schedule.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/TargetPlatform.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/UserAgent.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError/Code.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError_Code.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_CustomAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_GoogleAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_ExportToSecurityCommandCenter.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_RiskLevel.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Schedule.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_TargetPlatform.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_UserAgent.php",
        "WebSecurityScanner/src/V1beta/ScanRun.php",
        "WebSecurityScanner/src/V1beta/ScanRun/ExecutionState.php",
        "WebSecurityScanner/src/V1beta/ScanRun/ResultState.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace/Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace_Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace/Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace_Code.php",
        "WebSecurityScanner/src/V1beta/ScanRun_ExecutionState.php",
        "WebSecurityScanner/src/V1beta/ScanRun_ResultState.php",
        "WebSecurityScanner/src/V1beta/StartScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/StopScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/UpdateScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/ViolatingResource.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders/Header.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders_Header.php",
        "WebSecurityScanner/src/V1beta/VulnerableParameters.php",
        "WebSecurityScanner/src/V1beta/WebSecurityScannerClient.php",
        "WebSecurityScanner/src/V1beta/WebSecurityScannerGrpcClient.php",
        "WebSecurityScanner/src/V1beta/Xss.php",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_client_config.json",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_descriptor_config.php",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_rest_client_config.php",
        "WebSecurityScanner/synth.metadata",
        "WebSecurityScanner/synth.py",
        "WebSecurityScanner/tests/Unit/V1beta/WebSecurityScannerClientTest.php",
        "composer.json",
        "docs/contents/cloud-web-security-scanner.json",
        "docs/contents/google-cloud.json",
        "docs/manifest.json"
      ]
    },
    {
      "sha": "8db7f3b19c46c873897d79c89ce35b8492e5fe60",
      "message": "feat: move speech from alpha -> beta (#1962)",
      "files": [
        "README.md",
        "Speech/README.md"
      ]
    },
    {
      "sha": "52f4fbfa1fc3fde585c84e64ef40571d2b85d72e",
      "message": "fix: correctly label as beta (#1963)",
      "files": [
        "AutoMl/README.md"
      ]
    },
    {
      "sha": "da6e52d956c1e35d19e75e0f2fdba439739ba364",
      "message": "feat: Add mp3 encoding and context hint boost support. (#1959)",
      "files": [
        "Speech/metadata/V1P1Beta1/CloudSpeech.php",
        "Speech/src/V1p1beta1/RecognitionConfig/AudioEncoding.php",
        "Speech/src/V1p1beta1/SpeechContext.php",
        "Speech/synth.metadata"
      ]
    },
    {
      "sha": "bf69d0f204474b88b3f8b5a72a392129d16a3929",
      "message": "fix: language system test (#1958)",
      "files": [
        "Language/tests/System/AnalyzeTest.php"
      ]
    },
    {
      "sha": "a8b5b0bc9e9ed7998e30983834f7d841b6a37d6f",
      "message": "fix: continue switch targeting warning in PHP 7.3 (#1957)",
      "files": [
        "Debugger/src/Agent.php"
      ]
    },
    {
      "sha": "cf52ec0bcdc777dc9c5e76153d7d253bea95d44b",
      "message": "feat: Add Collection Group Query support (#1944)\n\n* Add Collection Group Query support\r\n\r\n* Fix documentation\r\n\r\n* Address code review\r\n\r\n* Throw from createDocumentReference",
      "files": [
        "Firestore/src/Connection/Grpc.php",
        "Firestore/src/FieldPath.php",
        "Firestore/src/FirestoreClient.php",
        "Firestore/src/Query.php",
        "Firestore/src/SnapshotTrait.php",
        "Firestore/tests/Snippet/CollectionReferenceTest.php",
        "Firestore/tests/Snippet/FieldPathTest.php",
        "Firestore/tests/Snippet/FirestoreClientTest.php",
        "Firestore/tests/Snippet/QueryTest.php",
        "Firestore/tests/System/CollectionGroupTest.php",
        "Firestore/tests/System/FirestoreTestCase.php",
        "Firestore/tests/Unit/CollectionReferenceTest.php",
        "Firestore/tests/Unit/FieldPathTest.php",
        "Firestore/tests/Unit/FirestoreClientTest.php",
        "Firestore/tests/Unit/QueryTest.php"
      ]
    }
  ]
}

exports['graphqlToCommits converts raw graphql response into Commits object for php-yoshi 1'] = {
  "endCursor": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42 31",
  "hasNextPage": true,
  "commits": [
    {
      "sha": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42",
      "message": "fix: Update PubSub timeouts. (#1967)",
      "files": [
        "PubSub/src/V1/resources/subscriber_client_config.json",
        "PubSub/synth.metadata"
      ]
    },
    {
      "sha": "269cf923ea6fd0375abaf0bb19790475693c6f90",
      "message": "fix: Assorted minor fixes for Cloud Datastore client (#1964)",
      "files": [
        "Datastore/src/Connection/Grpc.php",
        "Datastore/src/DatastoreClient.php",
        "Datastore/src/Entity.php",
        "Datastore/src/EntityIterator.php",
        "Datastore/src/EntityMapper.php",
        "Datastore/src/Key.php",
        "Datastore/src/Operation.php",
        "Datastore/src/TransactionTrait.php"
      ]
    },
    {
      "sha": "da356f004ff891e11a369fd634f55d6abade708f",
      "message": "Prepare v0.102.0 (#1965)",
      "files": [
        "AutoMl/VERSION",
        "Debugger/VERSION",
        "Debugger/src/DebuggerClient.php",
        "Dialogflow/VERSION",
        "Firestore/VERSION",
        "Firestore/src/FirestoreClient.php",
        "Language/VERSION",
        "Language/src/LanguageClient.php",
        "Speech/VERSION",
        "Speech/src/SpeechClient.php",
        "Tasks/VERSION",
        "Vision/VERSION",
        "Vision/src/VisionClient.php",
        "WebSecurityScanner/VERSION",
        "composer.json",
        "docs/manifest.json",
        "src/ServiceBuilder.php",
        "src/Version.php"
      ]
    },
    {
      "sha": "fa5761e9e52f36506a72a9292843259d198468b0",
      "message": "feat: Add Web Security Center Client (#1961)\n\n* add synth script\r\n\r\n* generate web security scanner\r\n\r\n* add to docs site\r\n\r\n* update README\r\n\r\n* update composer\r\n\r\n* remove whitespace in sample\r\n\r\n* add phpunit config\r\n\r\n* add hyperlink\r\n\r\n* autoload tests\r\n\r\n* more autoload fixes",
      "files": [
        "README.md",
        "WebSecurityScanner/.gitattributes",
        "WebSecurityScanner/.github/pull_request_template.md",
        "WebSecurityScanner/CONTRIBUTING.md",
        "WebSecurityScanner/LICENSE",
        "WebSecurityScanner/README.md",
        "WebSecurityScanner/composer.json",
        "WebSecurityScanner/metadata/V1Beta/CrawledUrl.php",
        "WebSecurityScanner/metadata/V1Beta/Finding.php",
        "WebSecurityScanner/metadata/V1Beta/FindingAddon.php",
        "WebSecurityScanner/metadata/V1Beta/FindingTypeStats.php",
        "WebSecurityScanner/metadata/V1Beta/ScanConfig.php",
        "WebSecurityScanner/metadata/V1Beta/ScanConfigError.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRun.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRunErrorTrace.php",
        "WebSecurityScanner/metadata/V1Beta/ScanRunWarningTrace.php",
        "WebSecurityScanner/metadata/V1Beta/WebSecurityScanner.php",
        "WebSecurityScanner/phpunit.xml.dist",
        "WebSecurityScanner/src/V1beta/CrawledUrl.php",
        "WebSecurityScanner/src/V1beta/CreateScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/DeleteScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/Finding.php",
        "WebSecurityScanner/src/V1beta/FindingTypeStats.php",
        "WebSecurityScanner/src/V1beta/Form.php",
        "WebSecurityScanner/src/V1beta/Gapic/WebSecurityScannerGapicClient.php",
        "WebSecurityScanner/src/V1beta/GetFindingRequest.php",
        "WebSecurityScanner/src/V1beta/GetScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/GetScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/ListCrawledUrlsRequest.php",
        "WebSecurityScanner/src/V1beta/ListCrawledUrlsResponse.php",
        "WebSecurityScanner/src/V1beta/ListFindingTypeStatsRequest.php",
        "WebSecurityScanner/src/V1beta/ListFindingTypeStatsResponse.php",
        "WebSecurityScanner/src/V1beta/ListFindingsRequest.php",
        "WebSecurityScanner/src/V1beta/ListFindingsResponse.php",
        "WebSecurityScanner/src/V1beta/ListScanConfigsRequest.php",
        "WebSecurityScanner/src/V1beta/ListScanConfigsResponse.php",
        "WebSecurityScanner/src/V1beta/ListScanRunsRequest.php",
        "WebSecurityScanner/src/V1beta/ListScanRunsResponse.php",
        "WebSecurityScanner/src/V1beta/OutdatedLibrary.php",
        "WebSecurityScanner/src/V1beta/README.md",
        "WebSecurityScanner/src/V1beta/ScanConfig.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/CustomAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/GoogleAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/ExportToSecurityCommandCenter.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/RiskLevel.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/Schedule.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/TargetPlatform.php",
        "WebSecurityScanner/src/V1beta/ScanConfig/UserAgent.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError/Code.php",
        "WebSecurityScanner/src/V1beta/ScanConfigError_Code.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_CustomAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_GoogleAccount.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_ExportToSecurityCommandCenter.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_RiskLevel.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_Schedule.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_TargetPlatform.php",
        "WebSecurityScanner/src/V1beta/ScanConfig_UserAgent.php",
        "WebSecurityScanner/src/V1beta/ScanRun.php",
        "WebSecurityScanner/src/V1beta/ScanRun/ExecutionState.php",
        "WebSecurityScanner/src/V1beta/ScanRun/ResultState.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace/Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunErrorTrace_Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace/Code.php",
        "WebSecurityScanner/src/V1beta/ScanRunWarningTrace_Code.php",
        "WebSecurityScanner/src/V1beta/ScanRun_ExecutionState.php",
        "WebSecurityScanner/src/V1beta/ScanRun_ResultState.php",
        "WebSecurityScanner/src/V1beta/StartScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/StopScanRunRequest.php",
        "WebSecurityScanner/src/V1beta/UpdateScanConfigRequest.php",
        "WebSecurityScanner/src/V1beta/ViolatingResource.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders/Header.php",
        "WebSecurityScanner/src/V1beta/VulnerableHeaders_Header.php",
        "WebSecurityScanner/src/V1beta/VulnerableParameters.php",
        "WebSecurityScanner/src/V1beta/WebSecurityScannerClient.php",
        "WebSecurityScanner/src/V1beta/WebSecurityScannerGrpcClient.php",
        "WebSecurityScanner/src/V1beta/Xss.php",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_client_config.json",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_descriptor_config.php",
        "WebSecurityScanner/src/V1beta/resources/web_security_scanner_rest_client_config.php",
        "WebSecurityScanner/synth.metadata",
        "WebSecurityScanner/synth.py",
        "WebSecurityScanner/tests/Unit/V1beta/WebSecurityScannerClientTest.php",
        "composer.json",
        "docs/contents/cloud-web-security-scanner.json",
        "docs/contents/google-cloud.json",
        "docs/manifest.json"
      ]
    },
    {
      "sha": "8db7f3b19c46c873897d79c89ce35b8492e5fe60",
      "message": "feat: move speech from alpha -> beta (#1962)",
      "files": [
        "README.md",
        "Speech/README.md"
      ]
    },
    {
      "sha": "52f4fbfa1fc3fde585c84e64ef40571d2b85d72e",
      "message": "fix: correctly label as beta (#1963)",
      "files": [
        "AutoMl/README.md"
      ]
    },
    {
      "sha": "da6e52d956c1e35d19e75e0f2fdba439739ba364",
      "message": "feat: Add mp3 encoding and context hint boost support. (#1959)",
      "files": [
        "Speech/metadata/V1P1Beta1/CloudSpeech.php",
        "Speech/src/V1p1beta1/RecognitionConfig/AudioEncoding.php",
        "Speech/src/V1p1beta1/SpeechContext.php",
        "Speech/synth.metadata"
      ]
    },
    {
      "sha": "bf69d0f204474b88b3f8b5a72a392129d16a3929",
      "message": "fix: language system test (#1958)",
      "files": [
        "Language/tests/System/AnalyzeTest.php"
      ]
    },
    {
      "sha": "a8b5b0bc9e9ed7998e30983834f7d841b6a37d6f",
      "message": "fix: continue switch targeting warning in PHP 7.3 (#1957)",
      "files": [
        "Debugger/src/Agent.php"
      ]
    },
    {
      "sha": "cf52ec0bcdc777dc9c5e76153d7d253bea95d44b",
      "message": "feat: Add Collection Group Query support (#1944)\n\n* Add Collection Group Query support\r\n\r\n* Fix documentation\r\n\r\n* Address code review\r\n\r\n* Throw from createDocumentReference",
      "files": [
        "Firestore/src/Connection/Grpc.php",
        "Firestore/src/FieldPath.php",
        "Firestore/src/FirestoreClient.php",
        "Firestore/src/Query.php",
        "Firestore/src/SnapshotTrait.php",
        "Firestore/tests/Snippet/CollectionReferenceTest.php",
        "Firestore/tests/Snippet/FieldPathTest.php",
        "Firestore/tests/Snippet/FirestoreClientTest.php",
        "Firestore/tests/Snippet/QueryTest.php",
        "Firestore/tests/System/CollectionGroupTest.php",
        "Firestore/tests/System/FirestoreTestCase.php",
        "Firestore/tests/Unit/CollectionReferenceTest.php",
        "Firestore/tests/Unit/FieldPathTest.php",
        "Firestore/tests/Unit/FirestoreClientTest.php",
        "Firestore/tests/Unit/QueryTest.php"
      ]
    }
  ]
}

exports['graphqlToCommits uses label for conventional commit prefix, if no prefix provided 1'] = {
  "endCursor": "fcd1c890dc1526f4d62ceedad561f498195c8939 99",
  "hasNextPage": true,
  "commits": [
    {
      "sha": "fcd1c890dc1526f4d62ceedad561f498195c8939",
      "message": "Refactor shared IAM-based signing (#292)\n\n* Extract IAM signing into its own class\r\n\r\n* Refactor into IamUtils package private class\r\n\r\n* Remove unnecessary class\r\n\r\n* Remove unused code\r\n\r\n* Cleanup imports\r\n\r\n* Fill out javadoc for IamUtils\r\n\r\n* Failing tests for impersonated credentials\r\n\r\n* Fix credentials used for signing\r\n\r\n* Fix providing delegates to signing request\r\n\r\n* Disallow null additionalFields, remove jsr305 annotation\r\n\r\n* Remove usued imports",
      "files": []
    },
    {
      "sha": "1f9663cf08ab1cf3b68d95dee4dc99b7c4aac373",
      "message": "Update allowed header format (#301)\n\n* Update copyright format  \r\n\r\n@chingor13\r\n\r\n* Update java.header\r\n\r\n* add legacy copyright\r\n\r\n* remove spurious $",
      "files": []
    },
    {
      "sha": "3006009a2b1b2cb4bd5108c0f469c410759f3a6a",
      "message": "Upgrade Guava to 28.0-android (#300)",
      "files": []
    },
    {
      "sha": "35abf13fa8acb3988aa086f3eb23f5ce1483cc5d",
      "message": "fix: Fix declared dependencies from merge issue (#291)",
      "files": []
    }
  ]
}
