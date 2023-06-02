### GET

# pgbench -h localhost -p 5432 -U postgres -n -f bench.sql -T10 -P5 -c10 postgres
progress: 5.0 s, 1153.6 tps, lat 8.507 ms stddev 1.447
progress: 10.0 s, 1208.4 tps, lat 8.181 ms stddev 0.545
transaction type: bench.sql
scaling factor: 1
query mode: simple
- number of clients: 10
number of threads: 1
- duration: 10 s
- number of transactions actually processed: 11819
latency average = 8.339 ms
latency stddev = 1.096 ms
tps = 1181.343749 (including connections establishing)
tps = 1181.757528 (excluding connections establishing)

### POST

# pgbench -h localhost -p 5432 -U postgres -n -f benchPost.sql -T10 -P5 -c10 postgres
progress: 5.0 s, 18157.7 tps, lat 0.528 ms stddev 0.406
progress: 10.0 s, 19473.5 tps, lat 0.499 ms stddev 0.369
transaction type: benchPost.sql
scaling factor: 1
query mode: simple
- number of clients: 10
number of threads: 1
- duration: 10 s
- number of transactions actually processed: 188166
latency average = 0.513 ms
latency stddev = 0.388 ms
tps = 18807.504839 (including connections establishing)
tps = 18814.351018 (excluding connections establishing)
