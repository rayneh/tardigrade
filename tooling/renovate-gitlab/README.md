# renovate

## Schedule

Renovate is configured to run in a regular interval via [scheduled Pipeline](https://gitlab.devops.telekom.de/vaas/renovate/-/pipeline_schedules).

## Running Renovate locally

Install `renovate`:

```shell
yarn global add renovate
```

Or if you are using npm:

```shell
npm install -g renovate
```

Configure Renovate to work with Gitlab:

```shell
export RENOVATE_USERNAME=<YOUR_GITLAB_USERNAME>
export RENOVATE_TOKEN=<YOUR_GITLAB_TOKEN>
```

Configure Renovate to work with the Github API for fetching release notes:

```shell
export GITHUB_COM_TOKEN=<YOUR_GITHUB_API_TOKEN>
```

Run `renovate`:

```shell
renovate
```

## Troubleshooting

### Debugging in the pipeline

When running Renovate in the pipeline, a log file with log level `DEBUG` is stored as an artifact. Use this for debugging issues.

### Debugging locally

The default log level is set to `INFO`. To change it, do the following:

```shell
export LOG_LEVEL=debug
```

