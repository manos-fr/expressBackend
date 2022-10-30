## GET

### This is ApacheBench, Version 2.3 <$Revision: 1901567 $>

Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

#### Finished 63 requests

- Server Hostname: 127.0.0.1
- Server Port: 3000
- #### Document Length: 1812726 bytes
- #### Concurrency Level: 10
- #### Time taken for tests: 10.070 seconds
- #### Complete requests: 63
- Failed requests: 0
- Total transferred: 114217362 bytes
- HTML transferred: 114201738 bytes
- #### Requests per second: 6.26 [#/sec] (mean)
- Time per request: 1598.367 [ms] (mean)
- Time per request: 159.837 [ms] (mean, across all concurrent requests)
- Transfer rate: 11076.82 [Kbytes/sec] received

#### Percentage of the requests served within a certain time (ms)

- 50% 1394
- 66% 1443
- 75% 1474
- 80% 1491
- 90% 1526
- 95% 1557
- 98% 1674
- 99% 1711
- 100% 1711 (longest request)

##### Table rows: 8578

## POST

### This is ApacheBench, Version 2.3 <$Revision: 1901567 $>

Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

#### Finished 16333 requests

- Server Port: 3000
- #### Document Length: 186 bytes
- #### Concurrency Level: 10
- #### Time taken for tests: 10.642 seconds
- #### Complete requests: 16333
- Failed requests: 0
- Total transferred: 7039523 bytes
- Total body sent: 4148836
- HTML transferred: 3037938 bytes
- #### Requests per second: 1534.71 [#/sec] (mean)
- Time per request: 6.516 [ms] (mean)
- Time per request: 0.652 [ms] (mean, across all concurrent requests)

#### Transfer rate:

- 645.96 [Kbytes/sec] received
- 380.70 kb/s sent
- 1026.66 kb/s total

#### Percentage of the requests served within a certain time (ms)

- 50% 1
- 66% 1
- 75% 2
- 80% 2
- 90% 2
- 95% 2
- 98% 3
- 99% 3
- 100% 1413 (longest request)

##### Table rows: 8477

## PUT

### This is ApacheBench, Version 2.3 <$Revision: 1901567 $>

Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

#### Finished 81 requests

- Server Port: 3000
- Document Path: /titles/tt0495647
- #### Document Length: 42 bytes
- #### Concurrency Level: 10
- #### Time taken for tests: 10.274 seconds
- #### Complete requests: 81
- Failed requests: 0
- Total transferred: 22761 bytes
- Total body sent: 20340
- HTML transferred: 3402 bytes
- #### Requests per second: 7.88 [#/sec] (mean)
- Time per request: 1268.380 [ms] (mean)
- Time per request: 126.838 [ms] (mean, across all concurrent requests)

#### Transfer rate:

- 2.16 [Kbytes/sec] received
- 1.93 kb/s sent
- 4.10 kb/s total

#### Percentage of the requests served within a certain time (ms)

- 50% 980
- 66% 1251
- 75% 1318
- 80% 1408
- 90% 1787
- 95% 2407
- 98% 4510
- 99% 5183
- 100% 5183 (longest request)

##### Table rows: 8477

- ##### ab -u benchPut.json -T application/json -c 10 -t 10 127.0.0.1:3000/titles/tt0496196
- ##### ab -t 10 -c 10 -p bench.json -T application/json 127.0.0.1:3000/titles
