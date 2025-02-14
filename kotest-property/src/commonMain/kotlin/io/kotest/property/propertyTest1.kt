@file:Suppress("NOTHING_TO_INLINE")

package io.kotest.property

import io.kotest.matchers.shouldBe
import io.kotest.property.arbitrary.default
import io.kotest.property.internal.proptest
import kotlin.jvm.JvmName

@JvmName("checkAllExt")
suspend fun <A> Gen<A>.checkAll(property: suspend PropertyContext.(A) -> Unit) = checkAll(this, property)

suspend fun <A> checkAll(
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(genA, PropTestConfig(), property)

@JvmName("checkAllExt")
suspend fun <A> Gen<A>.checkAll(iterations: Int, property: suspend PropertyContext.(A) -> Unit) =
   checkAll(iterations, this, property)

suspend fun <A> checkAll(
   iterations: Int,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(genA, PropTestConfig(constraints = Constraints.iterations(iterations)), property)

@JvmName("checkAllExt")
suspend fun <A> Gen<A>.checkAll(config: PropTestConfig, property: suspend PropertyContext.(A) -> Unit) =
   checkAll(config, this, property)

suspend fun <A> checkAll(
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(genA, config, property)

@JvmName("checkAllExt")
suspend fun <A> Gen<A>.checkAll(
   iterations: Int,
   config: PropTestConfig,
   property: suspend PropertyContext.(A) -> Unit
) = checkAll(iterations, config, this, property)

suspend fun <A> checkAll(
   iterations: Int,
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(genA, config.copy(iterations = iterations), property)

suspend inline fun <reified A> checkAll(
   noinline property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(
   Arb.default<A>(),
   PropTestConfig(),
   property
)

suspend inline fun <reified A> checkAll(
   iterations: Int,
   noinline property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(
   Arb.default<A>(),
   PropTestConfig(constraints = Constraints.iterations(iterations)),
   property
)

suspend inline fun <reified A> checkAll(
   config: PropTestConfig,
   noinline property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(
   Arb.default<A>(),
   config,
   property
)

suspend inline fun <reified A> checkAll(
   iterations: Int,
   config: PropTestConfig,
   noinline property: suspend PropertyContext.(A) -> Unit
): PropertyContext = proptest(
   Arb.default<A>(),
   config.copy(iterations = iterations),
   property
)

@JvmName("forAllExt")
suspend fun <A> Gen<A>.forAll(property: suspend PropertyContext.(A) -> Boolean) =
   forAll(this, property)

suspend fun <A> forAll(
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forAll(PropTestConfig(), genA, property)

@JvmName("forAllExt")
suspend fun <A> Gen<A>.forAll(iterations: Int, property: suspend PropertyContext.(A) -> Boolean) =
   forAll(iterations, this, property)

suspend fun <A> forAll(
   iterations: Int,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forAll(iterations, PropTestConfig(), genA, property)

@JvmName("forAllExt")
suspend fun <A> Gen<A>.forAll(config: PropTestConfig, property: suspend PropertyContext.(A) -> Boolean) =
   forAll(config, this, property)

suspend fun <A> forAll(
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = proptest(genA, config) { a -> property(a) shouldBe true }

@JvmName("forAllExt")
suspend fun <A> Gen<A>.forAll(iterations: Int, config: PropTestConfig, property: suspend PropertyContext.(A) -> Boolean) =
   forAll(config.copy(iterations = iterations), this, property)

suspend fun <A> forAll(
   iterations: Int,
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forAll(config.copy(iterations = iterations), genA, property)

suspend inline fun <reified A> forAll(
   crossinline property: PropertyContext.(A) -> Boolean
) = forAll(PropTestConfig(), property)

suspend inline fun <reified A> forAll(
   iterations: Int,
   crossinline property: PropertyContext.(A) -> Boolean
): PropertyContext = forAll(PropTestConfig(constraints = Constraints.iterations(iterations)), property)

suspend inline fun <reified A> forAll(
   config: PropTestConfig,
   crossinline property: PropertyContext.(A) -> Boolean
) = proptest<A>(
   Arb.default<A>(),
   config
) { a -> property(a) shouldBe true }

suspend inline fun <reified A> forAll(
   iterations: Int,
   config: PropTestConfig,
   crossinline property: PropertyContext.(A) -> Boolean
) = proptest<A>(
   Arb.default<A>(),
   config.copy(iterations = iterations)
) { a -> property(a) shouldBe true }

@JvmName("forNoneExt")
suspend fun <A> Gen<A>.forNone(property: suspend PropertyContext.(A) -> Boolean) =
   forNone(this, property)

suspend fun <A> forNone(
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forNone(PropTestConfig(), genA, property)

@JvmName("forNoneExt")
suspend fun <A> Gen<A>.forNone(iterations: Int, property: suspend PropertyContext.(A) -> Boolean) =
   forAll(iterations, this, property)

suspend fun <A> forNone(
   iterations: Int,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forNone(iterations, PropTestConfig(), genA, property)

@JvmName("forNoneExt")
suspend fun <A> Gen<A>.forNone(config: PropTestConfig, property: suspend PropertyContext.(A) -> Boolean) =
   forNone(config, this, property)

suspend fun <A> forNone(
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = proptest<A>(
   genA,
   config
) { a -> property(a) shouldBe false }

@JvmName("forNoneExt")
suspend fun <A> Gen<A>.forNone(
   iterations: Int,
   config: PropTestConfig,
   property: suspend PropertyContext.(A) -> Boolean
) =
   forNone(iterations, config, this, property)

suspend fun <A> forNone(
   iterations: Int,
   config: PropTestConfig,
   genA: Gen<A>,
   property: suspend PropertyContext.(A) -> Boolean
) = forNone(config.copy(iterations = iterations), genA, property)

suspend inline fun <reified A> forNone(
   crossinline property: PropertyContext.(A) -> Boolean
) = forNone(PropTestConfig(), property)

suspend inline fun <reified A> forNone(
   iterations: Int,
   crossinline property: PropertyContext.(A) -> Boolean
) = forNone(iterations, PropTestConfig(), property)

suspend inline fun <reified A> forNone(
   config: PropTestConfig,
   crossinline property: PropertyContext.(A) -> Boolean
) = proptest<A>(
   Arb.default<A>(),
   config
) { a -> property(a) shouldBe false }

suspend inline fun <reified A> forNone(
   iterations: Int,
   config: PropTestConfig,
   crossinline property: PropertyContext.(A) -> Boolean
) = forNone(config.copy(iterations = iterations), property)
