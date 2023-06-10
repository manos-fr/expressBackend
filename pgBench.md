### GET

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

### PUT

progress: 5.0 s, 1521.6 tps, lat 6.518 ms stddev 4.278
progress: 10.0 s, 1509.8 tps, lat 6.624 ms stddev 4.227
transaction type: benchPut.sql
scaling factor: 1
query mode: simple
- number of clients: 10
- number of threads: 1
- duration: 10 s
- number of transactions actually processed: 15164
latency average = 6.573 ms
latency stddev = 4.254 ms
tps = 1514.403876 (including connections establishing)
tps = 1514.964706 (excluding connections establishing)
